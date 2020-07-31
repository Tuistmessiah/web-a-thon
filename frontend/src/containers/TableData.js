import React, { useState, useEffect } from "react";

import { getPage } from "../data/apis/wirewax";

import ConceptTable from "../components/ConceptTable";
import ConceptPagination from "../components/ConceptPagination";
import ConceptSearch from "../components/ConceptSearch";

export default function TableData() {
  const [dataTable, setDataTable] = useState([]);
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);
  const [order, setOrder] = useState({
    orientation: "asc",
    orderedName: "in_frame",
  });
  const [location, setlocation] = useState("");
  const [debouceWait, setDebounceWait] = useState("Ready");
  const rowsPerPage = 5;

  function handlePageChange(newPage = 1) {
    getPage({
      page: newPage - 1,
      rowsPerPage,
      orientation: order.orientation,
      orderedName: order.orderedName,
      location,
    }).then((data) => {
      if (!data) return;
      setDataTable(data.table);
      setMaxPage(data.maxPage);
      setPage(newPage);
    });
  }

  async function orderPage(orderedName) {
    await setOrder({
      orderedName,
      orientation: order.orientation === "asc" ? "desc" : "asc",
    });
    getPage({
      page: page - 1,
      rowsPerPage,
      orientation: order.orientation,
      orderedName: order.orderedName,
      location,
    }).then((data) => {
      if (!data) return;
      setDataTable(data.table);
      setMaxPage(data.maxPage);
    });
  }

  async function filterLocation(location) {
    await setlocation(location);
    if (debouceWait === "Ready") {
      await setDebounceWait("Holding");
      getPage({
        page: page - 1,
        rowsPerPage,
        orientation: order.orientation,
        orderedName: order.orderedName,
        location,
      }).then((data) => {
        if (!data) return;
        setDataTable(data.table);
        setMaxPage(data.maxPage);
      });
      setTimeout(function () {
        setDebounceWait("Ready");
      }, 200);
    }
  }

  useEffect(() => {
    handlePageChange();
  }, []);

  if (!Array.isArray(dataTable)) {
    return <div>Error... Something went wrong :(!</div>;
  }

  return (
    <div>
      <ConceptSearch location={location} filterLocation={filterLocation} />
      <ConceptTable
        data={dataTable}
        rowsPerPage={rowsPerPage}
        page={page}
        order={order}
        orderPage={orderPage}
      />
      <ConceptPagination
        rowsPerPage={rowsPerPage}
        page={page}
        maxPage={maxPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}
