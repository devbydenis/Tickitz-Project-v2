// import {useRouteError} from "react-router";

const ErrorPage = () => {
  // const error = useRouteError();
  return (
    <>
      <section className="flex flex-col gap-5 justify-center items-center h-screen">
        <h1 className="font-extrabold text-9xl mb-5 text-red-500">Error</h1>
        <p>There is something wrong</p>
      </section>
    </>
  );
};

export default ErrorPage;
