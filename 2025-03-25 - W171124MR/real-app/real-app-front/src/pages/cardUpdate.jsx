import cardsService from "../services/cardsService";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Joi from "joi";
import { useFormik } from "formik";

import PageHeader from "../components/common/pageHeader";
import Input from "../components/common/input";
import useCard from "../hooks/useCard";

function CardUpdate() {
  const { id } = useParams();
  const card = useCard(id);

  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },

    validate(values) {
      const schema = Joi.object({
        bizName: Joi.string().min(2).max(255).required().label("Name"),
        bizDescription: Joi.string()
          .min(2)
          .max(1024)
          .required()
          .label("Description"),
        bizAddress: Joi.string().min(2).max(400).required().label("Address"),
        bizPhone: Joi.string()
          .min(9)
          .max(10)
          .required()
          .regex(/^0[2-9]\d{7,8}$/)
          .label("Phone"),
        bizImage: Joi.string().min(11).max(1024).label("Image").allow(""),
      });

      const { error } = schema.validate(values, { abortEarly: false });

      if (!error) {
        return null;
      }

      const errors = {};
      for (const detail of error.details) {
        errors[detail.path[0]] = detail.message;
      }

      return errors;
    },
    async onSubmit(values) {
      try {
        const { bizImage, ...body } = values;

        if (bizImage) {
          body.bizImage = bizImage;
        }

        await cardsService.updateCard(id, body);
        navigate("/my-cards");
      } catch (err) {
        if (err.response?.status === 400) {
          setServerError(err.response.data);
        }
      }
    },
  });

  useEffect(() => {
    if (!card) {
      return;
    }

    form.setValues({
      bizName: card.data.bizName,
      bizDescription: card.data.bizDescription,
      bizAddress: card.data.bizAddress,
      bizPhone: card.data.bizPhone,
      bizImage: card.data.bizImage,
    });
  }, [card]);

  return (
    <div className="container">
      <PageHeader title="Update Card" />

      <form onSubmit={form.handleSubmit}>
        {serverError && <div className="alert alert-danger">{serverError}</div>}

        <Input
          {...form.getFieldProps("bizName")}
          type="text"
          label="Name"
          required
          error={form.touched.bizName && form.errors.bizName}
        />
        <Input
          {...form.getFieldProps("bizDescription")}
          type="text"
          label="Description"
          required
          error={form.touched.bizDescription && form.errors.bizDescription}
        />
        <Input
          {...form.getFieldProps("bizAddress")}
          type="text"
          label="Address"
          required
          error={form.touched.bizAddress && form.errors.bizAddress}
        />
        <Input
          {...form.getFieldProps("bizPhone")}
          type="text"
          label="Phone"
          required
          error={form.touched.bizPhone && form.errors.bizPhone}
        />
        <Input
          {...form.getFieldProps("bizImage")}
          type="text"
          label="Image"
          error={form.touched.bizImage && form.errors.bizImage}
        />

        <div className="my-2">
          <button
            type="submit"
            disabled={!form.isValid}
            className="btn btn-primary"
          >
            Create Card
          </button>
        </div>
      </form>
    </div>
  );
}
export default CardUpdate;
