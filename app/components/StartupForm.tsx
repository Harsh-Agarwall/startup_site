"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Form from "next/form"
import { useState, useActionState  } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Send } from "lucide-react";
import { formSchema } from "@/lib/validation";
import { z } from "zod";
import { createPitch } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const StartupForm = () => {

const [error,setErrors]=useState<Record<string,string>>({});
const [pitch, setPitch] = useState("");
const router = useRouter();


 const handleFormSubmit = async (prevState: any, formData: FormData) => {
  try {
    const formValues = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      category: formData.get("category") as string,
      link: formData.get("link") as string,
      pitch,
    };

    await formSchema.parseAsync(formValues);

    const result = await createPitch(prevState, formData, pitch);

    if (result.status == "SUCCESS") {
      toast.success("Your startup pitch has been created successfully");
      router.push(`/startup/${result._id}`);
    }

    return result;
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldErorrs = error.flatten().fieldErrors;

      setErrors(fieldErorrs as unknown as Record<string, string>);

      toast.error("Please check your inputs and try again");

      return { ...prevState, error: "Validation failed", status: "ERROR" };
    }

    toast.error("An unexpected error has occurred");

    return {
      ...prevState,
      error: "An unexpected error has occurred",
      status: "ERROR",
    };
  }
};

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });



  return (
    <Form action={formAction} className="startup-form" >
        <div>
            <label htmlFor="title" className="startup-form_label">
                Title
            </label>
            <Input
            id="title"
            name="title"
            required
            className="startup-form_input"
            placeholder="Startup Title"
            />
            {error.title && <p className="startup-form_error">{error.title}</p>}
        </div>
        <div>
            <label htmlFor="description" className="startup-form_label">
                Description
            </label>
            <Textarea
            id="description"
            name="description"
            required
            className="startup-form_textarea"
            placeholder="Startup Description"
            />
            {error.description && <p className="startup-form_error">{error.description}</p>}

        </div>
        <div>
            <label htmlFor="category" className="startup-form_label">
                Category
            </label>
            <Input
            id="category"
            name="category"
            required
            className="startup-form_input"
            placeholder="Enter Category Education,Art..."
            />
            {error.category && <p className="startup-form_error">{error.category}</p>}

        </div>
        <div>
            <label htmlFor="link" className="startup-form_label">
                Image URL
            </label>
            <Input
            id="link"
            name="link"
            required
            className="startup-form_input"
            placeholder="Image URL"
            />
            {error.link && <p className="startup-form_error">{error.link}</p>}

        </div>
        <div data-color-mode="light">
        <label htmlFor="pitch" className="startup-form_label">
          Pitch
        </label>

        <MDEditor
          value={pitch}
          onChange={(value) => setPitch(value as string)}
          id="pitch"
          preview="edit"
          height={300}
          style={{ borderRadius: 20, overflow: "hidden" }}
          textareaProps={{
            placeholder:
              "Briefly describe your idea and what problem it solves",
          }}
          previewOptions={{
            disallowedElements: ["style"],
          }}
        />

        {error.pitch && <p className="startup-form_error">{error.pitch}</p>}
      </div>
       <button
        type="submit"
        className="startup-form_btn flex justify-center items-center !color-pink-800 text-white"
        disabled={isPending}
      >
         {isPending ? "Submitting..." : "Submit Your Pitch"}
        <Send className="size-6 ml-2 text-white" />
      </button>


    </Form>
  )
}

export default StartupForm
