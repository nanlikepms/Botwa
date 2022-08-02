import React from "react";
import OverviewContent from "../../components/organisms/overview";
import Sidebar from "../../components/organisms/sidebar";

type Props = {};

function Member({}: Props) {
  return (
    <>
      {/* Overview */}
      <section className="overview overflow-auto">
        <Sidebar activePath="/member" />
        <OverviewContent />
      </section>
    </>
  );
}

export default Member;
