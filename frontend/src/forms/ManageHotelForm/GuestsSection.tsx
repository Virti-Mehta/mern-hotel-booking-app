import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const GuestSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Guests</h2>
      <div className="grid grid-cols-2 bg-gray-200 p-6 gap-5 ">
        <label className="text-gray-700 text-sm font-semibold">
          Adults
          <input
            type="number"
            min={1}
            className="border rounded py-2 px-3 font-normal w-full"
            {...register("adultCount", {
              required: "This field is required",
            })}
          ></input>
          {errors.adultCount?.message && (
            <span className="text-red-500">{errors.adultCount?.message}</span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-semibold">
          Children
          <input
            type="number"
            min={1}
            className="border rounded py-1 px-2 font-normal gap-4 w-full"
            {...register("childCount", {
              required: "This field is required",
            })}
          ></input>
          {errors.childCount?.message && (
            <span className="text-red-500">{errors.childCount?.message}</span>
          )}
        </label>
      </div>
    </div>
  );
};

export default GuestSection;
