// components/TeamSection.js

const TeamSection = () => {
  return (
    <section id="team" className="py-12 bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Meet Our Team</h2>

        {/* Major Person */}
        <div className="mb-12">
          <img
            src="5.png"
            alt="Major Person"
            className="w-72 h-72 rounded-full mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold text-white">Jane Doe</h3>
          <p className="text-gray-300">CEO & Founder</p>
          <p className="mt-2 text-gray-400">
            Jane has over 10 years of experience in the industry and leads the
            team with vision and passion.
          </p>
        </div>

        {/* Other Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-gradient-to-r from-purple-500 to-purple-700 p-6 rounded-lg shadow-md"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-72 h-72 rounded-full mx-auto mb-4"
              />
              <h4 className="text-2xl font-semibold text-white">
                {member.name}
              </h4>
              <p className="text-white">{member.position}</p>
              <p className="text-gray-300">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sample data for other team members
const teamMembers = [
  {
    name: "John Smith",
    position: "Lead Developer",
    description:
      "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    image: "5.png",
  },
  {
    name: "Alice Johnson",
    position: "Designer",
    description:
      "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    image: "5.png",
  },
  {
    name: "Mark Wilson",
    position: "Marketing Specialist",
    description:
      "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    image: "5.png",
  },
];

export default TeamSection;
