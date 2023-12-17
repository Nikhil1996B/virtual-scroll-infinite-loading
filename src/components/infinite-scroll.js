import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { PropTypes } from "prop-types";

/**
 * A container component for infinite scrolling.
 */
function InfiniteScroll({ listItems, lastRowHandler }) {
  const [lastRowRef, lastRowInView] = useInView();
  // if last row is in view, call the last row handler
  useEffect(() => {
    lastRowInView && lastRowHandler();
  }, [lastRowInView]);
  const Elements = listItems.map((listItem, i) => {
    const props = { key: i };
    i === listItems.length - 1 && (props["ref"] = lastRowRef);
    return (
      <div {...props} key={i}>
        {listItem}
      </div>
    );
  });
  return <>{Elements}</>;
}

InfiniteScroll.propTypes = {
  listItems: PropTypes.array,
  lastRowHandler: PropTypes.func,
};

export default InfiniteScroll;
