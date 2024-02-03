import TextInput from "../components/TextInput.tsx";

export default function Discover() {
  return (
    <>
      <style>
        @import url(/styles/discover.css);
      </style>
      <div id="discover-wrap" className="w-screen h-screen bg-[--pri]">
        <div id="top-nav" className="grid bg-[--sec]">
          <div id="plc-back">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-arrow-left"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </div>
          <div></div>
          <div id="plc-login" className="grid">
            <img
              src="/assets/arya_dp.png"
              alt="avatar"
              width="40px"
              height="40px"
              className="bg-[--ace] rounded-full"
            />
            <h1>
              Hello Arya
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-down inline"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </h1>
          </div>
        </div>
        <div id="filter" className="pl-4 pt-8 bg-[--sec]">
          <TextInput name="topics" label="Search By Topics" />
          <h1 className="mt-8 mb-2">Sort By</h1>
          <select
            name="sort"
            id="sorting-options"
            className="rounded-[--brds] p-2 bg-white"
          >
            <option value="popularity">popularity</option>
            <option value="publishing date">publishing date</option>
            <option value="name">name</option>
            <option value="impressions">impressions</option>
          </select>
          <h1 className="mt-8 mb-1">Filters</h1>
          <div>
            upvotes: <span className="text-[--ace]">1</span> |{" "}
            <span className="text-[--ace]">2</span> |{" "}
            <span className="text-[--ace]">3</span> |{" "}
            <span className="text-[--ace]">4</span> |{" "}
            <span className="text-[--ace]">5</span>
            <br />
            time: <span className="text-[--ace]">1week</span> |{" "}
            <span className="text-[--ace]">10d</span> |{" "}
            <span className="text-[--ace]">1mo</span> |{" "}
            <span className="text-[--ace]">1yr</span>
            <br />
            has projects: <span className="text-[--ace]">yes</span>
          </div>
          <h1 className="mt-10 mb-2">Active Filters</h1>
          <p className="plc-tags ">
            preact <span className="text-[--ace]">x</span>
          </p>
          <p className="plc-tags ">
            javascript <span className="text-[--ace]">x</span>
          </p>
          <br />
          <p className="plc-tags ">
            wds <span className="text-[--ace]">x</span>
          </p>
        </div>
        <div id="dashboard" className="rounded-ss-[--brds]">
          <div id="trending">
            <h1 className="text-2xl font-semibold ml-6 mt-4">Trending</h1>
            <div className="rounded-[--brds] plc-coutr mx-8 my-4">
              <img
                src="/assets/jsjourney.jpg"
                width="400px"
                height="160px"
                alt="js land"
              />
              <h1>JavaScript Land</h1>
              <h2>by moren</h2>
            </div>
          </div>
          <div id="for-you">
            <h1 className="text-2xl font-semibold ml-6 mt-4">For You</h1>
          </div>
        </div>
      </div>
    </>
  );
}
