import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import './index.css'; // Import the new CSS file
import Navbar from "./components/Navbar";
// Lazy-loaded components
const Home = lazy(() => import("./pages/Home"));
const GroupDashboard = lazy(() => import("./pages/GroupDashboard"));
const CreateGroup = lazy(() => import("./pages/CreateGroup"));
// const AddExpense = lazy(() => import("./pages/AddExpense"));


function LandingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<GroupDashboard />} />
        <Route path="/create-group" element={<CreateGroup />} />
        {/* <Route path="/add-expense" element={<AddExpense />} /> */}
      </Routes>
    </Suspense>
  );
}

export default LandingPage;
