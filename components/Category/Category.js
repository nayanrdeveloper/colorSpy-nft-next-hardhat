import React from "react";
import CategoryCard from "./CategoryCard";

function Category() {
    const categoryList = [
        {
            name : "Arts",
            image1: "/category1.jpg",
            image2: "/category2.jpg",
            image3: "/category3.jpg",
            image4: "/category4.jpg",
            totalCount : 120,
            to: "",
        },
        {
            name : "Arts",
            image1: "/category1.jpg",
            image2: "/category2.jpg",
            image3: "/category3.jpg",
            image4: "/category4.jpg",
            totalCount : 120,
            to: "",
        },
        {
            name : "Arts",
            image1: "/category1.jpg",
            image2: "/category2.jpg",
            image3: "/category3.jpg",
            image4: "/category4.jpg",
            totalCount : 120,
            to: "",
        },
        {
            name : "Arts",
            image1: "/category1.jpg",
            image2: "/category2.jpg",
            image3: "/category3.jpg",
            image4: "/category4.jpg",
            totalCount : 120,
            to: "",
        },
    ]
  return (
    <div className="mt-20 container">
      <h3 className="text-4xl text-white2">Browse by category</h3>
      <div className="grid grid-cols-4 gap-5 mt-10">
        {
            categoryList.map((categoryData,index) => {
                return <CategoryCard key={index} data={categoryData} />
            })
        }
      </div>
    </div>
  );
}

export default Category;
