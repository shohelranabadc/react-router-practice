// components/dashboard/DashboardFooter.jsx

const DashboardFooter = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
      <p className="mb-2 sm:mb-0">
        © {new Date().getFullYear()} আপনার কোম্পানি। সর্বস্বত্ব সংরক্ষিত।
      </p>
      <div className="flex gap-4">
        <a href="#" className="hover:text-blue-600 transition-colors">
          সাহায্য
        </a>
        <a href="#" className="hover:text-blue-600 transition-colors">
          গোপনীয়তা
        </a>
        <a href="#" className="hover:text-blue-600 transition-colors">
          শর্তাবলী
        </a>
      </div>
    </div>
  );
};

export default DashboardFooter;