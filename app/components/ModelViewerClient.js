// components/ModelViewerClient.js
"use client";
import React, { useEffect } from "react";
export default function ModelViewerClient(props) {
  useEffect(() => { import("@google/model-viewer"); }, []);
  return <model-viewer {...props} />;
}
