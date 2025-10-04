import React, { useState } from 'react';
import { Home, ShoppingBag, Search, Users, Calendar, Bell, FileText, Briefcase, Code, MessageSquare, Repeat, Phone, Menu, X, Upload, ThumbsUp, ThumbsDown, Plus, Filter, User, LogOut } from 'lucide-react';

// Mock Data
const mockUser = {
  id: 1,
  name: "Alex Kumar",
  email: "alex@college.edu",
  department: "Computer Science",
  year: "3rd Year",
  skills: ["React", "Python", "Design"]
};

const mockMarketItems = [
  { id: 1, title: "Data Structures Textbook", price: 450, seller: "Priya S", category: "books", image: "📚" },
  { id: 2, title: "Mountain Bike", price: 8000, seller: "Rahul M", category: "gadgets", image: "🚲" },
];

const mockLostItems = [
  { id: 1, item: "Blue ID Card", location: "Library", date: "2025-10-01", contact: "9876543210", status: "lost" },
  { id: 2, item: "Black Backpack", location: "Canteen", date: "2025-09-30", contact: "9876543211", status: "found" }
];

const mockStudyGroups = [
  { id: 1, name: "Data Structures Study Group", subject: "DSA", members: 12, meetTime: "Mon & Wed 6PM" },
  { id: 2, name: "DBMS Exam Prep", subject: "Database", members: 8, meetTime: "Tue & Thu 7PM" }
];

const mockEvents = [
  { id: 1, title: "Tech Fest 2025", date: "2025-10-15", type: "fest", organizer: "Tech Club" },
  { id: 2, title: "Machine Learning Workshop", date: "2025-10-20", type: "workshop", organizer: "AI Club" }
];

const mockNotices = [
  { id: 1, title: "Mid-Semester Exams Schedule", category: "exam", date: "2025-10-03", content: "Exams from Oct 25" },
  { id: 2, title: "Placement Drive - TCS", category: "placement", date: "2025-10-02", content: "Register by Oct 10" }
];

const mockNotes = [
  { id: 1, title: "OS Unit 3 Notes", subject: "Operating Systems", upvotes: 45, downvotes: 2, author: "Sneha R" },
  { id: 2, title: "CN Lab Manual", subject: "Computer Networks", upvotes: 38, downvotes: 1, author: "Arjun P" }
];

const mockProjects = [
  { id: 1, title: "E-commerce Platform", skills: ["React", "Node.js", "MongoDB"], author: "Vikram S", members: 2, needed: 4 },
  { id: 2, title: "ML Image Classifier", skills: ["Python", "TensorFlow", "OpenCV"], author: "Meera K", members: 1, needed: 3 }
];

const mockHackathonTeams = [
  { id: 1, teamName: "Code Warriors", skills: ["React", "Python", "ML"], membersCount: 2, maxMembers: 4, leader: "Rohan D" },
  { id: 2, teamName: "Full Stack Devs", skills: ["MERN", "AWS", "Docker"], membersCount: 3, maxMembers: 4, leader: "Isha M" }
];

const mockSkillExchanges = [
  { id: 1, offering: "Photoshop & Design", seeking: "Java Programming", author: "Amit T" },
  { id: 2, offering: "Guitar Lessons", seeking: "Web Development", author: "Sanya B" }
];

const emergencyContacts = [
  { type: "Medical Emergency", number: "108", icon: "🏥" },
  { type: "College Hospital", number: "044-2234567", icon: "⚕️" },
  { type: "Hostel Warden (Boys)", number: "9876543210", icon: "🏠" },
  { type: "Hostel Warden (Girls)", number: "9876543211", icon: "🏠" },
  { type: "Transport Office", number: "044-2234568", icon: "🚌" },
  { type: "Security Office", number: "044-2234569", icon: "🛡️" }
];

// Component: Navigation
const Navigation = ({ activeTab, setActiveTab, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'marketplace', icon: ShoppingBag, label: 'Marketplace' },
    { id: 'lostandfound', icon: Search, label: 'Lost & Found' },
    { id: 'studygroups', icon: Users, label: 'Study Groups' },
    { id: 'events', icon: Calendar, label: 'Events' },
    { id: 'notices', icon: Bell, label: 'Notices' },
    { id: 'notes', icon: FileText, label: 'Notes' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'hackathons', icon: Code, label: 'Hackathons' },
    { id: 'feedback', icon: MessageSquare, label: 'Feedback' },
    { id: 'skillexchange', icon: Repeat, label: 'Skill Exchange' },
    { id: 'emergency', icon: Phone, label: 'Emergency' }
  ];

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="text-2xl font-bold">🎓 College Connect</div>
            </div>
            
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex items-center space-x-4">
              <span className="text-sm">{mockUser.name}</span>
              <button className="bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg transition">
                <User size={18} />
              </button>
              <button className="bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg transition">
                <LogOut size={18} />
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/20">
            <div className="grid grid-cols-2 gap-2 p-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => { setActiveTab(item.id); setIsMobileMenuOpen(false); }}
                  className={`flex items-center space-x-2 p-3 rounded-lg transition ${
                    activeTab === item.id ? 'bg-white/30' : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  <item.icon size={18} />
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div className="hidden md:block bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-1 overflow-x-auto py-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition ${
                  activeTab === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon size={18} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// Component: Home Dashboard
const HomeDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {mockUser.name}!</h1>
        <p className="text-lg opacity-90">{mockUser.department} • {mockUser.year}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Quick Stats</h3>
          <div className="space-y-2 text-gray-600">
            <p>📚 Active Listings: 12</p>
            <p>👥 Study Groups: 3</p>
            <p>📝 Notes Shared: 8</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Upcoming Events</h3>
          <div className="space-y-2 text-gray-600">
            <p>🎉 Tech Fest - Oct 15</p>
            <p>🔬 ML Workshop - Oct 20</p>
            <p>🏆 Hackathon - Oct 25</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Recent Activity</h3>
          <div className="space-y-2 text-gray-600">
            <p>✓ Joined DSA Study Group</p>
            <p>✓ Posted Lab Manual</p>
            <p>✓ Team request sent</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component: Marketplace
const Marketplace = () => {
  const [items, setItems] = useState(mockMarketItems);
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Campus Marketplace</h2>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition"
        >
          <Plus size={20} />
          <span>List Item</span>
        </button>
      </div>

      {showAddForm && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">List New Item</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" placeholder="Item Title" className="border rounded-lg px-4 py-2" />
            <input type="number" placeholder="Price (₹)" className="border rounded-lg px-4 py-2" />
            <select className="border rounded-lg px-4 py-2">
              <option>Books</option>
              <option>Gadgets</option>
              <option>Bicycles</option>
              <option>Hostel Items</option>
            </select>
            <input type="text" placeholder="Contact" className="border rounded-lg px-4 py-2" />
            <textarea placeholder="Description" className="border rounded-lg px-4 py-2 md:col-span-2" rows="3"></textarea>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
              Publish Listing
            </button>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {items.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-12 text-center text-6xl">
              {item.image}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
              <p className="text-green-600 font-bold text-xl mt-2">₹{item.price}</p>
              <p className="text-gray-600 text-sm mt-1">Seller: {item.seller}</p>
              <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Contact Seller
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component: Lost & Found
const LostAndFound = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Lost & Found</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition">
          <Plus size={20} />
          <span>Report Item</span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {mockLostItems.map(item => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-lg text-gray-800">{item.item}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                item.status === 'lost' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
              }`}>
                {item.status.toUpperCase()}
              </span>
            </div>
            <div className="space-y-2 text-gray-600">
              <p>📍 Location: {item.location}</p>
              <p>📅 Date: {item.date}</p>
              <p>📞 Contact: {item.contact}</p>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              {item.status === 'lost' ? 'I Found This' : 'This Is Mine'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component: Study Groups
const StudyGroups = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Study Groups</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition">
          <Plus size={20} />
          <span>Create Group</span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {mockStudyGroups.map(group => (
          <div key={group.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl text-gray-800 mb-2">{group.name}</h3>
            <div className="space-y-2 text-gray-600 mb-4">
              <p>📚 Subject: {group.subject}</p>
              <p>👥 Members: {group.members}</p>
              <p>🕒 Timing: {group.meetTime}</p>
            </div>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
              Join Group
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component: Events
const Events = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Campus Events</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition">
          <Filter size={20} />
          <span>Filter</span>
        </button>
      </div>

      <div className="space-y-4">
        {mockEvents.map(event => (
          <div key={event.id} className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h3 className="font-bold text-xl text-gray-800">{event.title}</h3>
              <p className="text-gray-600 mt-1">📅 {event.date} • Organized by {event.organizer}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                {event.type.toUpperCase()}
              </span>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Register
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component: Notices
const Notices = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Notice Board</h2>
        <select className="border rounded-lg px-4 py-2">
          <option>All Categories</option>
          <option>Exams</option>
          <option>Placements</option>
          <option>Cultural</option>
        </select>
      </div>

      <div className="space-y-4">
        {mockNotices.map(notice => (
          <div key={notice.id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-xl text-gray-800">{notice.title}</h3>
              <span className="text-sm text-gray-500">{notice.date}</span>
            </div>
            <p className="text-gray-600 mb-3">{notice.content}</p>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">
              {notice.category.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component: Notes
const Notes = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Study Resources</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition">
          <Upload size={20} />
          <span>Upload Notes</span>
        </button>
      </div>

      <div className="space-y-4">
        {mockNotes.map(note => (
          <div key={note.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-xl text-gray-800">{note.title}</h3>
                <p className="text-gray-600 mt-1">📚 {note.subject} • by {note.author}</p>
              </div>
              <div className="flex space-x-2">
                <button className="flex items-center space-x-1 px-3 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition">
                  <ThumbsUp size={16} />
                  <span>{note.upvotes}</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition">
                  <ThumbsDown size={16} />
                  <span>{note.downvotes}</span>
                </button>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component: Projects
const Projects = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Project Collaboration</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition">
          <Plus size={20} />
          <span>Post Project</span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {mockProjects.map(project => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl text-gray-800 mb-3">{project.title}</h3>
            <p className="text-gray-600 mb-3">Posted by {project.author}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.skills.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <p className="text-gray-600 mb-4">👥 {project.members}/{project.needed} members</p>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
              Request to Join
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component: Hackathons
const Hackathons = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Hackathon Teams</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition">
          <Plus size={20} />
          <span>Create Team</span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {mockHackathonTeams.map(team => (
          <div key={team.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-xl text-gray-800">{team.teamName}</h3>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                {team.membersCount}/{team.maxMembers}
              </span>
            </div>
            <p className="text-gray-600 mb-3">Team Lead: {team.leader}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {team.skills.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
              Send Join Request
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component: Feedback
const Feedback = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Feedback & Suggestions</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Submit Anonymous Feedback</h3>
        <div className="space-y-4">
          <select className="w-full border rounded-lg px-4 py-2">
            <option>Select Category</option>
            <option>College Facilities</option>
            <option>Events & Activities</option>
            <option>Cafeteria</option>
            <option>Transport</option>
            <option>Academic</option>
            <option>Hostel</option>
            <option>Other</option>
          </select>
          <textarea
            placeholder="Share your feedback or suggestions anonymously..."
            className="w-full border rounded-lg px-4 py-2"
            rows="6"
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Submit Feedback
          </button>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <p className="text-blue-800">
          <strong>Note:</strong> Your feedback is completely anonymous and helps improve our college experience for everyone.
        </p>
      </div>
    </div>
  );
};

// Component: Skill Exchange
const SkillExchange = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Skill Exchange</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition">
          <Plus size={20} />
          <span>Post Exchange</span>
        </button>
      </div>

      <div className="space-y-4">
        {mockSkillExchanges.map(exchange => (
          <div key={exchange.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">🎓 Offering</h4>
                <p className="text-gray-800">{exchange.offering}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-2">🔍 Seeking</h4>
                <p className="text-gray-800">{exchange.seeking}</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-600">Posted by {exchange.author}</p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
                Connect
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component: Emergency
const Emergency = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Emergency Contacts</h2>
      
      <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
        <p className="text-red-800 font-semibold">
          ⚠️ In case of emergency, call the appropriate number immediately.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {emergencyContacts.map((contact, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-3">{contact.icon}</div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">{contact.type}</h3>
            <p className="text-2xl font-bold text-blue-600">{contact.number}</p>
            <button className="w-full mt-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
              Call Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch(activeTab) {
      case 'home': return <HomeDashboard />;
      case 'marketplace': return <Marketplace />;
      case 'lostandfound': return <LostAndFound />;
      case 'studygroups': return <StudyGroups />;
      case 'events': return <Events />;
      case 'notices': return <Notices />;
      case 'notes': return <Notes />;
      case 'projects': return <Projects />;
      case 'hackathons': return <Hackathons />;
      case 'feedback': return <Feedback />;
      case 'skillexchange': return <SkillExchange />;
      case 'emergency': return <Emergency />;
      default: return <HomeDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;