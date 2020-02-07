import React from 'react';
import { Redirect } from "react-router-dom";

import Home from '../application/Home';
import Rank from '../application/Rank';
import Singers from '../application/Singers';
import Recommend from '../application/Recommend';



export default [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => (
          <Redirect to={"/recommend"}/>
        )
      },
      {
        path: "/recommend",
        component: Recommend
      },
      {
        path: "/singers",
        component: Singers
      },
      {
        path: "/rank",
        component: Rank
      }
    ]
  }
]