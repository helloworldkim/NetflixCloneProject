import React from 'react';

const Row = ({actions}) => {
    return(
        <div className="row">
          {actions
            ? actions.slice(0, 6).map((item) => {
                let post = "http://image.tmdb.org/t/p/w500" + item.poster_path;
                return (
                  <img
                    src={post}
                    key={item.id}
                    width="180px"
                    alt={item.title}
                    style={{ margin: "5px" }}
                  />
                );
              })
            : ""}
        </div>
    );
}

export default Row;
