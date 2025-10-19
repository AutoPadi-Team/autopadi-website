interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

export const Testimonial = ({ quote, author, role }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-700 italic mb-4">"{quote}"</p>
      <div className="flex items-center">
        <div className="bg-blue-700 text-white rounded-full h-10 w-10 flex items-center justify-center mr-3">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold">{author}</p>
        </div>
        <div>
          <p className="font-light text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
};
