- to create a contact form: <https://medium.com/nerd-for-tech/coding-a-contact-form-with-next-js-and-nodemailer-d3a8dc6cd645>

```jsx
<form
  className="w-full"
  onSubmit={(e) => {
    handleSubmit(e);
  }}
>
  <div className="flex flex-col mb-4">
    <label
      htmlFor="name"
      className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white"
    >
      Name
    </label>
    <input
      type="text"
      name="name"
      required={true}
      className="py-1 px-2 w-full max-w-sm border-2 border-black dark:border-white"
      onChange={(e) => {
        setName(e.target.value);
      }}
    />
  </div>

  <div className="flex flex-col mb-4">
    <label
      htmlFor="email"
      className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white"
    >
      Email
    </label>
    <input
      type="email"
      name="email"
      required={true}
      className="py-1 px-2 w-full max-w-sm border-2 border-black dark:border-white"
      onChange={(e) => {
        setEmail(e.target.value);
      }}
    />
  </div>

  <div className="flex flex-col mb-4">
    <label
      htmlFor="message"
      className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white"
    >
      Message
    </label>
    <textarea
      name="message"
      required={true}
      rows={5}
      cols={9}
      className="py-1 px-2 border-2 border-black dark:border-white"
      onChange={(e) => {
        setMessage(e.target.value);
      }}
    />
  </div>
  <div className="flex justify-center items-center mt-8">
    <button
      className="flex gap-4 justify-center items-center py-1 px-4 text-lg font-semibold border-2 border-gray-300 hover:border-black dark:hover:border-white"
      type={"submit"}
    >
      Submit
      <div
        className={cn(
          "w-6 h-6 rounded-full border-l-2 border-gray-900 animate-spin",
          status === "pending" ? "visible" : "hidden"
        )}
      />
    </button>
  </div>
</form>
```
