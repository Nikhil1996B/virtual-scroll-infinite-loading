import React from "react";
import VirtualScrollChild from "./virtual-scroll-child";
import InfiniteScroll from "./infinite-scroll";
import { PropTypes } from "prop-types";

/**
 * A wrapper component for implementing virtual and
 * infinite scrolling.
 */
function VirtualAndInfiniteScroll({ listItems, height, lastRowHandler }) {
  const VirtualScrollChildren = listItems.map((listItem, index) => (
    <VirtualScrollChild key={index} height={height}>
      {listItem}
    </VirtualScrollChild>
  ));

  return (
    <InfiniteScroll
      listItems={VirtualScrollChildren}
      lastRowHandler={lastRowHandler}
    />
  );
}

VirtualAndInfiniteScroll.propTypes = {
  listItems: PropTypes.array,
  height: PropTypes.number,
  lastRowHandler: PropTypes.func,
};

export default VirtualAndInfiniteScroll;
