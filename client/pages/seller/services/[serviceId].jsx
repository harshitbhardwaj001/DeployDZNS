import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import ShopHeader from "../../../components/ShopHeader";
import categories from "../../../utils/categories";
import ImageUpload from "../../../components/ImageUpload";
import axios from "axios";
import {
  EDIT_SERVICE_ROUTE,
  GET_SERVICE_DATA,
  HOST,
} from "../../../utils/constants";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

const create = () => {
  const [cookies] = useCookies();
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  const { serviceId } = router.query;
  const [files, setFiles] = useState([]);
  const [features, setFeatures] = useState([]);
  const [data, setData] = useState({
    title: "",
    category: "",
    time: 0,
    revisions: 0,
    feature: "",
    price: 0,
    shortDesc: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const inputClassName =
    "block p-4 w-full text-white text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-500 focus:ring-blue-500 focus:border-blue-500 ";
  const labelClassName =
    "mb-2 text-lg font-medium text-gray-900 dark:text-white";

  const addFeature = () => {
    if (data.feature) {
      setFeatures([...features, data.feature]);
      setData({ ...data, feature: "" });
    }
  };

  const removeFeature = (index) => {
    const clonedFeatures = [...features];
    clonedFeatures.splice(index, 1);
    setFeatures(clonedFeatures);
  };

  const editService = async () => {
    const { category, description, price, revisions, time, title, shortDesc } =
      data;
    console.log(data);
    if (
      category &&
      description &&
      title &&
      features.length &&
      files.length &&
      price > 0 &&
      shortDesc.length &&
      revisions > 0 &&
      time > 0
    ) {
      console.log("entered");
      const formData = new FormData();
      files.forEach((file) => formData.append("images", file));
      const serviceData = {
        title,
        description,
        category,
        features,
        price,
        revisions,
        time,
        shortDesc,
      };

      const response = await axios.put(
        `${EDIT_SERVICE_ROUTE}/${serviceId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${cookies.jwt}`,
          },
          params: serviceData,
        }
      );
      if (response.status === 200) {
        router.push("/seller/services");
      }
    }
  };

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const {
          data: { service },
        } = await axios.get(`${GET_SERVICE_DATA}/${serviceId}`);
        setData({ ...service, time: service.revisions });
        setFeatures(service.features);

        service.images.forEach((image) => {
          const url = HOST + "/uploads/" + image;
          const fileName = image;
          fetch(url).then(async (response) => {
            const contentType = response.headers.get("content-type");
            const blob = await response.blob();
            const files = new File([blob], fileName, { contentType });
            setFiles([files]);
          });
        });
      } catch (err) {
        console.log(err);
      }
    };
    if (serviceId) fetchServiceData();
  }, [serviceId]);

  return (
    <>
      <div className="nav overflow-hidden fixed h-full w-full">
        <Navbar clicked={clicked} setClicked={setClicked} />
      </div>
      <div className={`${clicked ? "hidden" : "block"}`}>
        <div className="min-h-[80vh] relative my-10 mt-0 top-[10rem] px-32">
          <h1 className="text-4xl text-white mb-3 w-full">Edit Service</h1>
          <h3 className="text-xl text-white mb-5 w-full">
            Enter the details to edit the service.
          </h3>
          <div className="flex flex-col gap-5 mt-10">
            <div className="grid grid-cols-2 gap-11">
              <div>
                <label htmlFor="title" className={labelClassName}>
                  Service Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={data.title}
                  onChange={handleChange}
                  id="title"
                  className={inputClassName}
                  placeholder="eg. Logo Design"
                  required
                />
              </div>
              <div>
                <label htmlFor="category" className={labelClassName}>
                  Select a Category
                </label>
                <select
                  name="category"
                  id="category"
                  className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-[#F4FF00] focus:border-[#F4FF00] block w-full p-4"
                  onChange={handleChange}
                  value={data.category}
                >
                  {categories.map(({ name }) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="description" className={labelClassName}>
                Service Description
              </label>
              <textarea
                name="description"
                id="description"
                className="block p-2.5 w-full text-sm text-white bg-gray-500 rounded-lg border border-gray-300 focus:ring-[#F4FF00] focus:border-[#F4FF00]"
                placeholder="Write a short description for the Service."
                value={data.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="grid grid-cols-2 gap-11">
              <div>
                <label htmlFor="delivery" className={labelClassName}>
                  Service Delivery
                </label>
                <input
                  type="number"
                  name="time"
                  value={data.time}
                  onChange={handleChange}
                  id="delivery"
                  className={inputClassName}
                  placeholder="Minimum Delivery Time."
                  required
                />
              </div>
              <div>
                <label htmlFor="revision" className={labelClassName}>
                  Service Revisions
                </label>
                <input
                  type="number"
                  name="revisions"
                  value={data.revisions}
                  onChange={handleChange}
                  id="revision"
                  className={inputClassName}
                  placeholder="Max number of revisions"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-11">
              <div>
                <label htmlFor="features" className={labelClassName}>
                  Service Features
                </label>
                <div className="flex gap-3 items-center mb-5">
                  <input
                    type="text"
                    name="feature"
                    value={data.feature}
                    onChange={handleChange}
                    id="features"
                    className={inputClassName}
                    placeholder="Enter a Feature Name"
                    required
                  />
                  <button
                    type="button"
                    className="focus:outline-none text-[#1e1e1e] bg-[#F4FF00] font-extrabold text-lg px-10 py-3 rounded-md"
                    onClick={addFeature}
                  >
                    Add
                  </button>
                </div>
                <ul className="flex gap-2 flex-wrap">
                  {features.map((feature, index) => (
                    <li
                      key={index + feature}
                      className="flex gap-2 items-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-500 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 cursor-pointer hover:border-red-200"
                    >
                      <span>{feature}</span>
                      <span
                        className="text-red-700"
                        onClick={() => removeFeature(index)}
                      >
                        X
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <label htmlFor="image" className={labelClassName}>
                  Service Images
                </label>
                <div>
                  <ImageUpload files={files} setFile={setFiles} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-11">
              <div>
                <label htmlFor="shortDesc" className={labelClassName}>
                  Short Description
                </label>
                <input
                  type="text"
                  name="shortDesc"
                  value={data.shortDesc}
                  onChange={handleChange}
                  id="shortDesc"
                  className={inputClassName}
                  placeholder="Enter a short description"
                  required
                />
              </div>
              <div>
                <label htmlFor="price" className={labelClassName}>
                  Service Price ( &#8377; )
                </label>
                <input
                  type="number"
                  name="price"
                  value={data.price}
                  onChange={handleChange}
                  id="price"
                  className={inputClassName}
                  placeholder="Enter a price"
                  required
                />
              </div>
            </div>
            <div>
              <button
                className="border text-lg font-semibold px-5 py-3 z-[10] border-[#F4FF00] bg-[#F4FF00] text-black rounded-md"
                type="button"
                onClick={editService}
              >
                Edit Service
              </button>
            </div>
          </div>
        </div>
        <footer className="flex justify-center my-7 mt-[15rem]">
          <div>&copy;{new Date().getFullYear()} DZNS Studio</div>
        </footer>
      </div>
    </>
  );
};

export default create;
