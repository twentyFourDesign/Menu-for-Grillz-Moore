import React, { useEffect, useLayoutEffect, useState } from "react";
import CardDetails from "./CardDetails";
import { menu as staticMenu} from '../data'


import Masonry from "react-smart-masonry";
import useWindowWidth from "./width";
const breakpoints = { mobile: 600, tablet: 700, desktop: 1100 };


export default function Menu() {
  const [menu, setMenu] = useState(staticMenu);
  // const [menu1, setMenu1] = useState(staticMenu);

  const [loading, setLoading] = useState(false);
  const currWidth = useWindowWidth();

  // const fixCard = (data) => {
  //   setMenu1(data);
  //   const arry = [...data];
  //   const firstElement = arry?.[0];
  //   const lastElement = arry?.[arry?.length - 4];
  //   arry?.pop();
  //   arry.splice(3, 0, firstElement);
  //   arry.splice(10, 0, lastElement);
  //   arry?.shift();
  //   setMenu(arry);
  // };

  // useLayoutEffect(() => {
  //   // setLoading(true);
  //   // fetch(`https://sabis.jollofbyjara.com/api/`)
  //   //   .then((response) => response.json())
  //   //   .then((data) => {
  //       fixCard(staticMenu);
  //     // })
  //     // .catch(() => )
  //     // .finally(() => setLoading(false));
  // }, []);

  // useEffect(() => {
  //   if (currWidth <= 1100) {
  //     const arry = [...menu1];
  //     const firstElement = menu1?.[0];
  //     const sixth = menu1?.[16];
  //     const seventh = menu1?.[17];
  //     const eight = menu1?.[18];
  //     const nineth = menu1?.[19];
  //     arry.splice(16, 1);
  //     arry.splice(17, 1);
  //     arry.splice(18, 1);
  //     arry.splice(19, 1);
  //     arry?.shift();
  //     arry.splice(2, 0, firstElement);
  //     arry.splice(16, 0, seventh);
  //     arry.splice(17, 0, sixth);
  //     arry.splice(19, 0, nineth);
  //     arry.splice(20, 0, eight);

  //     setMenu(arry);
  //   } else {
  //     fixCard(menu1);
  //   }
  // }, [currWidth, menu1]);

  if (loading) {
    return (
      <div className="testing">
        <h2 className="data-notfound">Loading...</h2>
      </div>
    );
  }
  return (
    <div className="testing">
      <Masonry
        breakpoints={breakpoints}
        columns={{ mobile: 1, tablet: 2, desktop: 3 }}
        gap={{ mobile: 20, tablet: 30, desktop: 40 }}
      >
        {menu?.length ? (
          menu?.map((item) => (
            <CardDetails title={item.title} items={item.data} serveWidth= {item.serveWidth} />
          ))
        ) : (
          <h2 className="data-notfound">Menu Not Found</h2>
        )}
      </Masonry>
    </div>
  );
}

  
  
  
  










