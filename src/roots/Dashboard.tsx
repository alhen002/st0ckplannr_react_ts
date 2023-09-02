import React from "react";
import { Outlet } from "react-router-dom";

export default function Dashboard(): React.ReactNode {
  return (
    <div>
      Hier muss eine side navigation rein und auf der rechten seite ein
      dashboard. side navigation in einem separaten component, damit es als
      layout immer auf den children seiten bleiben kann .
    </div>
  );
}
