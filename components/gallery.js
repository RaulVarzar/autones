import React from 'react';

const Gallery = () => {
  return (
    <div class="py-4 px-2 mx-auto max-w-screen-xl sm:py-24 lg:px-6 w-full">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
        <div class="col-span-2 sm:col-span-1 md:col-span-2  h-auto md:h-full flex flex-col">
          <a
            href=""
            class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
          >
            <img
              src="https://images.unsplash.com/photo-1686966933735-305bd8fe0a77?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRvd2luZ3xlbnwwfHwwfHx8Mg%3D%3D"
              alt=""
              class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </a>
        </div>
        <div class="col-span-2 sm:col-span-1 md:col-span-2 ">
          <a
            href=""
            class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
          >
            <img
              src="https://images.unsplash.com/photo-1673187139211-1e7ec3dd60ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRvd2luZ3xlbnwwfHwwfHx8Mg%3D%3D"
              alt=""
              class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </a>
          <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
            <a
              href=""
              class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
            >
              <img
                src="https://images.unsplash.com/photo-1673187139181-795761a40ca1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
                alt=""
                class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </a>
            <a
              href=""
              class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
            >
              <img
                src="https://images.unsplash.com/photo-1596383765797-8e10e88d1590?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"
                alt=""
                class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </a>
          </div>
        </div>
        <div class="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
          <a
            href=""
            class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
          >
            <img
              src="https://images.unsplash.com/photo-1673187139612-6bf684a74815?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
              alt=""
              class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
