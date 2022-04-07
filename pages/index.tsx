import React from "react";
import type { NextPage } from "next";

import { Loading } from "../components";

const Home: NextPage = () => {
    return (
        <>
            <h1 className="text-5xl text-center underline">gzt-hackFest2022</h1>

            <Loading isParent={false} />
        </>
    );
};

export default Home;
