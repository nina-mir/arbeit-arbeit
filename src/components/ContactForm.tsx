"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import ContactInfo from "@/components/ContactInfo"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  serviceType: z.enum(["incall", "outcall", "noPreference", "somethingElse"], {
    required_error: "Please select a service type.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).optional(),
})

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "noPreference",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Handle form submission
  }

  return (

    <div className="flex md:flex-row flex-col gap-y-4">
      {/* <div className="px-6 mt-1">
        <h2
          className="text-xl 
            font-semibold 
            text-gray-800 
            mb-1 
          ">
          Contact Info:
        </h2>
        <hr className="border-stone-800" />
        <div className="">

        </div>

      </div> */}
      <div className="border-black bg-gray-100  md:w-[50%] flex justify-center items-center">
        <ContactInfo />
      </div>

      <div className=" md:min-w-[50%] md:w-[50%] flex-4 max-w-md mx-auto p-6 bg-[var(--card)]  shadow-sm border border-gray-100">

        <h2 className="text-xl font-semibold text-gray-800 mb-6">Email Erica</h2>
        <Form  {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Name</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-gray-100 border-gray-200 focus:bg-gray-50"
                      placeholder="Your name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            {/* Email Field (Required) */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Email*</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-gray-100 border-gray-200 focus:bg-gray-50"
                      placeholder="your.email@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            {/* Phone Field */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Phone</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-gray-100 border-gray-200 focus:bg-gray-50"
                      placeholder="No Google phone or app number please"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-gray-500 text-xs">
                    We'll only use this to contact you about your inquiry.
                  </FormDescription>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            {/* Service Type Radio Group */}
            {/* <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-gray-700">Service Preference</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-2 "
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0 md:flex-row">
                        <FormControl>
                          <RadioGroupItem value="incall" className="text-gray-600 bg-stone-50" />
                        </FormControl>
                        <FormLabel className="font-normal text-gray-700">
                          Incall
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="outcall" className="text-gray-600 bg-stone-50" />
                        </FormControl>
                        <FormLabel className="font-normal text-gray-700">
                          Outcall
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="noPreference" className="text-gray-600 bg-stone-50" />
                        </FormControl>
                        <FormLabel className="font-normal text-gray-700">
                          No preference
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="somethingElse" className="text-gray-600 bg-stone-50" />
                        </FormControl>
                        <FormLabel className="font-normal text-gray-700">
                          Something else
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            /> */}

            {/* Message Textarea */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="bg-gray-100 border-gray-200 focus:bg-gray-50 min-h-[100px]"
                      placeholder="Tell me more ✨..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-gray-700 hover:bg-gray-600 text-gray-50"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}