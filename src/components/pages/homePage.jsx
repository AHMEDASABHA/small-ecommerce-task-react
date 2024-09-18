import ReactPlayer from "react-player";
import video from "../../assets/store.mp4";

export default function HomePage() {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 h-100 m-0 p-0 position-relative">
      <ReactPlayer
        url={video}
        playing
        loop
        width="100%"
        height="100%"
        className="vw-100"
      />
      <div
        className="fs-1 text-light bg-dark p-3 fw-bold z-1 position-absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.5)",
        }}
      >
        Welcome to my e-commerce app
      </div>
    </div>
  );
}
