import profileImg from '../../assets/images/profile.png';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-6 border-b-2 border-gray-200 shadow-md bg-white">
      {/* Website Title */}
      <h1 className="text-4xl font-extrabold text-gray-900">Knowledge Cafe</h1>

      {/* Profile Image */}
      <img
        src={profileImg}
        alt="Profile"
        className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
      />
    </div>
  );
};

export default Header;
