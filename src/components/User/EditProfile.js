import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function EditProfile() {
  const [oldInfor, setOldInfor] = useState({});
  const getData = async () => {
    try {
      const data = await axios.get("http://localhost:3000/users/get-profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setOldInfor(data.data);
      console.log("🚀 ~ getData ~ data:", data.data);
    } catch (e) {
      alert(e.message);
    }
  };

  const updateProfileUser = async (values) => {
    // console.log("🚀 ~ updateProfileUser ~ values:", values);
    try {
      const response = await axios.put(
        "http://localhost:3000/users/update-profile",
        values,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // console.log("🚀 ~ updateProfileUser ~ response:", response.data);
      // navigate("/user", { replace: true });
      window.location.reload();
    } catch (e) {
      alert(e.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4 mt-28">
      <div className="lg:w-3/5 md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
        <div>
          <div>
            <Link
              to="/user"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Back
              </span>
            </Link>
          </div>
          <div className="flex justify-center">
            <div>
              <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
                {oldInfor.username}
              </h1>
              <h2 className="text-grey text-sm mb-4 dark:text-gray-400">
                Create Profile
              </h2>
            </div>
          </div>
          <div className=" place-content-around  w-full h-48  rounded-sm bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat items-center">
            {/* <!-- Profile Image --> */}
            <div className="">
              <div className="mx-auto my-auto  size-28 bg-green-400 flex items-center justify-center rounded-full bg-cover bg-center bg-no-repeat">
                {oldInfor.image ? (
                  <img
                    className="rounded-full w-11/12 h-91-67 object-cover"
                    src={oldInfor.image}
                    alt=""
                  />
                ) : (
                  <img
                    className="rounded-full w-11/12 h-91-67 object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMI5YxZE03Vnj-s-sth2_JxlPd30Zy7yEGg&s"
                    alt=""
                  />
                )}
              </div>
            </div>
            <div className="flex justify-end">
              <input type="file" id="upload_cover" hidden />
              <div className="bg-white flex items-center gap-1 rounded-tl-md px-2 text-center font-semibold">
                <label
                  htmlFor="upload_cover"
                  className="inline-flex items-center gap-1 cursor-pointer"
                >
                  Cover
                  <svg
                    data-slot="icon"
                    className="w-6 h-5 text-blue-700"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                    ></path>
                  </svg>
                </label>
              </div>
            </div>
          </div>
          <h2 className="text-center mt-1 font-semibold dark:text-gray-300">
            Upload Profile and Cover Image
          </h2>
          <Formik
            initialValues={oldInfor || { image: "", dob: "" }}
            enableReinitialize
            onSubmit={(values) => {
              // console.log("🚀 ~ EditProfile ~ values:", values)
              updateProfileUser(values);
            }}
          >
            <Form className="w-full mb-4 mt-6 flex flex-col justify-center items-center ">
              <div className=" flex flex-col ">
                <label className="mb-1 dark:text-gray-300">Image</label>
                <Field
                  type="text"
                  name="image"
                  className="p-4 w-60 border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                  placeholder="Image/URL"
                />
              </div>
              <div className="mt-4 flex flex-col">
                <label className="mb-1 dark:text-gray-300">Date Of Birth</label>
                <Field
                  type="date"
                  name="dob"
                  className="p-4 w-60 border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                />
              </div>
              <div className="w-1/4 rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
                <button type="submit" className="w-full p-4">
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
