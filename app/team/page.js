
const members = [
  {
    name: "Alex Johnson",
    role: "Web Designer",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sara Mitchell",
    role: "UI/UX Designer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Chen",
    role: "Web Developer",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

export default function Team() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-3xl font-bold">Our Team</h1>

      <p className="mx-auto mt-12 max-w-md text-sm">
        Meet our creative team of designers and developers
        who bring ideas to life.
      </p>

      <div className="mt-20 flex flex-wrap justify-center gap-12">
        {members.map((member) => (
          <div key={member.name} className="text-center">
            <img
              src={member.photo}
              alt={member.name}
              className="mx-auto h-24 w-24 rounded-full object-cover"
            />
            <h2 className="mt-4 font-semibold">
              {member.name}
            </h2>
            <p className="mt-1 text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
