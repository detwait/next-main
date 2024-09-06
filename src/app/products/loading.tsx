import Spinner from "../../components/svg/spinner";

export default function Loading() {
  return (
    <>
      <div className="text-center">
          <div role="status">
              <Spinner />
              <span className="sr-only">Loading...</span>
          </div>
      </div>
    </>
  )
}