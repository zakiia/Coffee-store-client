import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Sucess!",
            text: "Coffee Updated Sucessfully",
            icon: "sucess",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Update Coffee</h2>
      <form onSubmit={handleUpdateCoffee}>
        {/* form name and quantity row*/}
        <div className="md:flex mb-8">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Coffee Name</span>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Coffee Name"
              className="input input-bordered w-full"
              defaultValue={name}
            />
          </label>
          <label className="form-control md:w-1/2 ml-4">
            <div className="label">
              <span className="label-text">Available Quantity</span>
            </div>
            <input
              type="text"
              name="quantity"
              placeholder="Available Quantity"
              className="input input-bordered w-full"
              defaultValue={quantity}
            />
          </label>
        </div>
        {/* form supplier and taste row*/}
        <div className="md:flex mb-8">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Supplier Name</span>
            </div>
            <input
              type="text"
              name="supplier"
              placeholder="Supplier Name"
              className="input input-bordered w-full"
              defaultValue={supplier}
            />
          </label>
          <label className="form-control md:w-1/2 ml-4">
            <div className="label">
              <span className="label-text">Taste</span>
            </div>
            <input
              type="text"
              name="taste"
              placeholder="Taste"
              className="input input-bordered w-full"
              defaultValue={taste}
            />
          </label>
        </div>
        {/* form category and details row*/}
        <div className="md:flex mb-8">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="input input-bordered w-full"
              defaultValue={category}
            />
          </label>
          <label className="form-control md:w-1/2 ml-4">
            <div className="label">
              <span className="label-text">Details</span>
            </div>
            <input
              type="text"
              name="details"
              placeholder="Details"
              className="input input-bordered w-full"
              defaultValue={details}
            />
          </label>
        </div>

        {/* form category and details row*/}
        <div className="mb-8">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Photo URL</span>
            </div>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered w-full"
              defaultValue={photo}
            />
          </label>
        </div>

        <input
          type="submit"
          value="Update Coffee"
          className="btn btn-block bg-base-content text-white"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
