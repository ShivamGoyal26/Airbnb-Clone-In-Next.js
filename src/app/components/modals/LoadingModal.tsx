"use client";

import useLoading from "@/app/hooks/userLoading";
import { BeatLoader } from "react-spinners";

const LoadingModal = () => {
  const loadingModule = useLoading();

  if (loadingModule.isLoading && loadingModule.modalLoading) {
    return (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
          <BeatLoader color="#fff" />
        </div>
      </>
    );
  }
  return null;
};

export default LoadingModal;
