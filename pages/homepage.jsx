import Image from "next/image";
import Link from "next/link";
import { useData } from "../context/DataContext";

const HomePage = () => {
  const { data } = useData();

  return (
    <section className="px-4 pb-12">
      <section className="md:flex justify-between">
        <div className="rnb md:flex h-[600px] md:h-[373px] p-4 rounded-xl relative md:w-[50%]">
          <div className="absolute right-0 md:hidden">
            <Image src="/images/Vector.png" alt="" width={250} height={250} />
          </div>
          <div className="flex flex-col justify-between h-full">
            <h6 className="text-[12px] text-white ">Curated Playlist</h6>
            <div className="">
              <h3 className="text-[35px] leading-[120%] text-white font-bold">
                R & B Hits
              </h3>
              <p className="text-[14px] leading-[120%] text-white">
                All mine, Lie again, Petty call me everyday, Out of time, No
                love, Bad habit, and so much more
              </p>
              <div className="flex justify-between px-16 items-center my-6">
                <div className="h-8 w-16 relative">
                  <Image
                    src="/images/Frame 4.png"
                    layout="fill"
                    alt="group-picture"
                  />
                </div>
                <div className="flex items-center">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.88371 3.23386C10.5977 3.25557 11.289 3.38024 11.9588 3.60804H12.0257C12.071 3.62957 12.105 3.65337 12.1277 3.6749C12.3782 3.75537 12.615 3.84604 12.8417 3.9707L13.2724 4.16337C13.4424 4.25404 13.6464 4.4229 13.7597 4.49204C13.873 4.5589 13.9977 4.62804 14.0997 4.70624C15.3588 3.74404 16.8877 3.2227 18.463 3.23386C19.1782 3.23386 19.8922 3.3349 20.571 3.5627C24.7542 4.9227 26.2615 9.5127 25.0024 13.5247C24.2884 15.5749 23.121 17.446 21.5922 18.9749C19.4037 21.0942 17.0022 22.9756 14.417 24.5962L14.1337 24.7674L13.839 24.5849C11.2448 22.9756 8.82971 21.0942 6.62084 18.9636C5.10218 17.4347 3.93371 15.5749 3.20838 13.5247C1.92771 9.5127 3.43504 4.9227 7.66351 3.5389C7.99218 3.42557 8.33104 3.34624 8.67104 3.30204H8.80704C9.12551 3.25557 9.44171 3.23386 9.75904 3.23386H9.88371ZM19.9817 6.81537C19.517 6.65557 19.007 6.90604 18.837 7.38204C18.6784 7.85804 18.9277 8.37937 19.4037 8.54824C20.1302 8.82024 20.6164 9.53537 20.6164 10.3276V10.3627C20.5948 10.6222 20.673 10.8727 20.8317 11.0654C20.9904 11.258 21.2284 11.3702 21.4777 11.394C21.9424 11.3816 22.339 11.0087 22.373 10.5316V10.3967C22.407 8.8089 21.4448 7.3707 19.9817 6.81537Z"
                      fill="white"
                    />
                  </svg>
                  <span className="text-[24px] text-white">33k Likes</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="/images/Pexels Photo by Eric Esma (1).png"
              width={500}
              height={500}
              alt=""
            />
          </div>
        </div>
        <div className="md:hidden">
          <h3 className="font-[24px] font-bold top-chart-text my-2">
            Top Charts
          </h3>
          <div className=" whitespace-nowrap overflow-auto">
            <Link href="/">
              <div className="w-4/5 cursor-pointer inline-block bg-black relative p-2 rounded-xl">
                <span className="block w-full h-20 ">
                  <Image
                    src="/images/Rectangle 17.png"
                    width={70}
                    height={70}
                    alt=""
                  />
                  <div className=" rounded-[50%] w-8 h-8 flex justify-center items-center border-slate-500 border-[1px]">
                    <svg
                      width="18"
                      className="heart absolute right-2 top-2"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.15388 8.69874C1.34913 6.18624 2.28963 3.31449 4.92738 2.46474C6.31488 2.01699 7.84638 2.28099 8.99988 3.14874C10.0911 2.30499 11.6789 2.01999 13.0649 2.46474C15.7026 3.31449 16.6491 6.18624 15.8451 8.69874C14.5926 12.6812 8.99988 15.7487 8.99988 15.7487C8.99988 15.7487 3.44838 12.7277 2.15388 8.69874Z"
                        stroke="#FACD66"
                        strokeWidth="0.5625"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        opacity="0.4"
                        d="M12 5.02501C12.8025 5.28451 13.3695 6.00076 13.4377 6.84151"
                        stroke="#FACD66"
                        strokeWidth="0.5625"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </span>
                <div className="">
                  <h5 className="text-[17px] text-white leading-[120%]">
                    Golden Age of 80s
                  </h5>
                  <p className="text-[12px] leading-[120%] mini-text">
                    Sean Swadder
                  </p>
                  <span className="text-[12px] leading-[120%] text-white">
                    2:34:45
                  </span>
                </div>
              </div>
            </Link>
            <Link href="/viewchart">
              <div className="w-4/5 cursor-pointer inline-block bg-black relative p-2 mx-2 rounded-xl">
                <span className="block w-full h-20 ">
                  <Image
                    src="/images/Rectangle 17.png"
                    width={70}
                    height={70}
                    alt=""
                  />
                  <div className=" rounded-[50%] w-8 h-8 flex justify-center items-center border-slate-500 border-[1px]">
                    <svg
                      width="18"
                      className="heart absolute right-2 top-2"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.15388 8.69874C1.34913 6.18624 2.28963 3.31449 4.92738 2.46474C6.31488 2.01699 7.84638 2.28099 8.99988 3.14874C10.0911 2.30499 11.6789 2.01999 13.0649 2.46474C15.7026 3.31449 16.6491 6.18624 15.8451 8.69874C14.5926 12.6812 8.99988 15.7487 8.99988 15.7487C8.99988 15.7487 3.44838 12.7277 2.15388 8.69874Z"
                        stroke="#FACD66"
                        strokeWidth="0.5625"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        opacity="0.4"
                        d="M12 5.02501C12.8025 5.28451 13.3695 6.00076 13.4377 6.84151"
                        stroke="#FACD66"
                        strokeWidth="0.5625"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </span>
                <div className="">
                  <h5 className="text-[17px] text-white leading-[120%]">
                    Golden Age of 80s
                  </h5>
                  <p className="text-[12px] leading-[120%] mini-text">
                    Sean Swadder
                  </p>
                  <span className="text-[12px] leading-[120%] text-white">
                    2:34:45
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/collections">
              <div className="w-4/5 cursor-pointer inline-block bg-black relative p-2 rounded-xl">
                <span className="block w-full h-20 ">
                  <Image
                    src="/images/Rectangle 17.png"
                    width={70}
                    height={70}
                    alt=""
                  />
                  <div className=" rounded-[50%] w-8 h-8 flex justify-center items-center border-slate-500 border-[1px]">
                    <svg
                      width="18"
                      className="heart absolute right-2 top-2"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.15388 8.69874C1.34913 6.18624 2.28963 3.31449 4.92738 2.46474C6.31488 2.01699 7.84638 2.28099 8.99988 3.14874C10.0911 2.30499 11.6789 2.01999 13.0649 2.46474C15.7026 3.31449 16.6491 6.18624 15.8451 8.69874C14.5926 12.6812 8.99988 15.7487 8.99988 15.7487C8.99988 15.7487 3.44838 12.7277 2.15388 8.69874Z"
                        stroke="#FACD66"
                        strokeWidth="0.5625"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        opacity="0.4"
                        d="M12 5.02501C12.8025 5.28451 13.3695 6.00076 13.4377 6.84151"
                        stroke="#FACD66"
                        strokeWidth="0.5625"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </span>
                <div className="">
                  <h5 className="text-[17px] text-white leading-[120%]">
                    Golden Age of 80s
                  </h5>
                  <p className="text-[12px] leading-[120%] mini-text">
                    Sean Swadder
                  </p>
                  <span className="text-[12px] leading-[120%] text-white">
                    2:34:45
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="hidden md:block md:w-[40%]">
          <h3 className="text-[24px] top-chart-text">Top Charts</h3>
          <div className=" md:w-[95%] lmao  gap-x-8 flex  overflow-hidden  md:flex-col justify-between md:h-[320px]">
            <Link href="/">
              <div className="flex w-[323px] cursor-pointer  md:w-full justify-between bg-black rounded-md p-4 h-[233px] md:h-[96px]">
                <div className="flex">
                  <Image
                    src="/images/Rectangle 17.png"
                    width={50}
                    height={50}
                    alt="top-chart-image"
                  />
                  <div className="ml-4">
                    <h5 className="text-[17px] leading-[120%] my-2 md:my-0 text-white">
                      Golden Age of 80s
                    </h5>
                    <p className="mini-text text-[12px] my-4 md:my-0 leading-[120%]">
                      Sean swadder
                    </p>
                    <p className="text-[14px] leading-[120%] text-white">
                      2:34:45
                    </p>
                  </div>
                </div>
                <div className=" rounded-[50%] w-8 h-8 flex justify-center items-center border-slate-500 border-[1px]">
                  <svg
                    width="18"
                    className="heart"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.15388 8.69874C1.34913 6.18624 2.28963 3.31449 4.92738 2.46474C6.31488 2.01699 7.84638 2.28099 8.99988 3.14874C10.0911 2.30499 11.6789 2.01999 13.0649 2.46474C15.7026 3.31449 16.6491 6.18624 15.8451 8.69874C14.5926 12.6812 8.99988 15.7487 8.99988 15.7487C8.99988 15.7487 3.44838 12.7277 2.15388 8.69874Z"
                      stroke="#FACD66"
                      strokeWidth="0.5625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      opacity="0.4"
                      d="M12 5.02501C12.8025 5.28451 13.3695 6.00076 13.4377 6.84151"
                      stroke="#FACD66"
                      strokeWidth="0.5625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
            <Link href="/viewchart">
              <div className="flex w-[323px] cursor-pointer md:w-full justify-between bg-black rounded-md p-4 h-[233px] md:h-[96px]">
                <div className="flex">
                  <Image
                    src="/images/Rectangle 17 (1).png"
                    width={50}
                    height={50}
                    alt="top-chart-image"
                  />
                  <div className="ml-4">
                    <h5 className="text-[17px] leading-[120%] text-white">
                      Reggae &apos;n&apos; blues
                    </h5>
                    <p className="mini-text text-[12px] leading-[120%]">
                      DJ YK Mule
                    </p>
                    <p className="text-[14px] leading-[120%] text-white">
                      1:02:42
                    </p>
                  </div>
                </div>
                <div className="rounded-[50%] w-8 h-8 flex justify-center items-center border-slate-500 border-[1px]">
                  <svg
                    width="18"
                    className="heart"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.15388 8.69874C1.34913 6.18624 2.28963 3.31449 4.92738 2.46474C6.31488 2.01699 7.84638 2.28099 8.99988 3.14874C10.0911 2.30499 11.6789 2.01999 13.0649 2.46474C15.7026 3.31449 16.6491 6.18624 15.8451 8.69874C14.5926 12.6812 8.99988 15.7487 8.99988 15.7487C8.99988 15.7487 3.44838 12.7277 2.15388 8.69874Z"
                      stroke="#FACD66"
                      strokeWidth="0.5625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      opacity="0.4"
                      d="M12 5.02501C12.8025 5.28451 13.3695 6.00076 13.4377 6.84151"
                      stroke="#FACD66"
                      strokeWidth="0.5625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
            <Link href="/collections">
              <div className="flex w-[323px] cursor-pointer md:w-full justify-between bg-black rounded-md p-4 h-[233px] md:h-[96px]">
                <div className="flex">
                  <Image
                    src="/images/Rectangle 17.png"
                    width={50}
                    height={50}
                    alt="top-chart-image"
                  />
                  <div className="ml-4">
                    <h5 className="text-[17px] leading-[120%] text-white">
                      Tommorow&apos;s tunes
                    </h5>
                    <p className="mini-text text-[12px] leading-[120%]">
                      Obi Datti
                    </p>
                    <p className="text-[14px] leading-[120%] text-white">
                      2:01:25
                    </p>
                  </div>
                </div>
                <div className="rounded-[50%] w-8 h-8 flex justify-center items-center border-slate-500 border-[1px]">
                  <svg
                    width="18"
                    className="heart"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.15388 8.69874C1.34913 6.18624 2.28963 3.31449 4.92738 2.46474C6.31488 2.01699 7.84638 2.28099 8.99988 3.14874C10.0911 2.30499 11.6789 2.01999 13.0649 2.46474C15.7026 3.31449 16.6491 6.18624 15.8451 8.69874C14.5926 12.6812 8.99988 15.7487 8.99988 15.7487C8.99988 15.7487 3.44838 12.7277 2.15388 8.69874Z"
                      stroke="#FACD66"
                      strokeWidth="0.5625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      opacity="0.4"
                      d="M12 5.02501C12.8025 5.28451 13.3695 6.00076 13.4377 6.84151"
                      stroke="#FACD66"
                      strokeWidth="0.5625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-start md:mt-12">
        <section className="w-full md:w-[90%] ">
          <h3 className="top-chart-text text-[24px] leading-[120%] font-bold my-2 mx-2 md:mx-6">
            New releases.
          </h3>
          <div className=" whitespace-nowrap overflow-auto cursor-pointer ">
            <div className=" inline-block mx-2 md:mx-6 w-40 h-[160px]">
              <Image
                src="/images/Rectangle 14 (2).png"
                alt=""
                width={180}
                height={180}
              />
              <h6 className="text-[12px] text-white">Everything black</h6>
              <p className="font-[12px] album-card-text">The van</p>
            </div>
            <div className=" inline-block mx-2 md:mx-6 w-40 h-[160px]">
              <Image
                src="/images/Rectangle 14 (2).png"
                alt=""
                width={180}
                height={180}
              />
              <h6 className="text-[12px] text-white">Everything black</h6>
              <p className="font-[12px] album-card-text">The van</p>
            </div>
            <div className=" inline-block mx-2 md:mx-6 w-40 h-[160px]">
              <Image
                src="/images/Rectangle 14 (2).png"
                alt=""
                width={180}
                height={180}
              />
              <h6 className="text-[12px] text-white">Everything black</h6>
              <p className="font-[12px] album-card-text">The van</p>
            </div>
            <div className=" inline-block mx-2 md:mx-6 w-40 h-[160px]">
              <Image
                src="/images/Rectangle 14 (2).png"
                alt=""
                width={180}
                height={180}
              />
              <h6 className="text-[12px] text-white">Everything black</h6>
              <p className="font-[12px] album-card-text">The van</p>
            </div>
            <div className=" inline-block mx-2 md:mx-6 w-40 h-[160px]">
              <Image
                src="/images/Rectangle 14 (2).png"
                alt=""
                width={180}
                height={180}
              />
              <h6 className="text-[12px] text-white">Everything black</h6>
              <p className="font-[12px] album-card-text">The van</p>
            </div>
            <div className=" inline-block mx-2 md:mx-6 w-40 h-[160px]">
              <Image
                src="/images/Rectangle 14 (2).png"
                alt=""
                width={180}
                height={180}
              />
              <h6 className="text-[12px] text-white">Everything black</h6>
              <p className="font-[12px] album-card-text">The van</p>
            </div>
            <div className=" inline-block mx-2 md:mx-6 w-40 h-[160px]">
              <Image
                src="/images/Rectangle 14 (2).png"
                alt=""
                width={180}
                height={180}
              />
              <h6 className="text-[12px] text-white">Everything black</h6>
              <p className="font-[12px] album-card-text">The van</p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default HomePage;
