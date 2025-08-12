import React from "react";
import { Code2, Target, ExternalLink } from "lucide-react";

// Types for coding platform data
interface CodingProfile {
  id: string;
  platform: string;
  username: string;
  description: string;
  stats: {
    problemsSolved?: number;
    contestRating?: number;
    globalRank?: number;
    badges?: number;
    streak?: number;
    accuracy?: string;
  };
  achievements: string[];
  profileUrl: string;
  isActive: boolean;
}

// Your coding platform profiles data
const codingProfilesData: CodingProfile[] = [
  {
    id: "leetcode",
    platform: "LeetCode",
    username: "retreat_caliber",
    description: "Focused on algorithmic problem-solving with emphasis on data structures, dynamic programming, and system design. Regular participation in contests and continuous skill improvement through consistent practice on LeetCode platform.",
    stats: {
      problemsSolved: 85,
      contestRating: 1200,
      globalRank: 45000,
      streak: 12,
      accuracy: "78%"
    },
    achievements: [
      "Active LeetCode Profile",
      "Regular Problem Solving",
      "Contest Participant",
      "Algorithm Practice",
      "Data Structure Focus"
    ],
    profileUrl: "https://leetcode.com/u/retreat_caliber/",
    isActive: true
  },
  {
    id: "gfg",
    platform: "GeeksforGeeks",
    username: "kasturidl9nt",
    description: "Comprehensive problem-solving across multiple domains with strong focus on algorithmic challenges. Currently maintaining a daily POTD streak and consistently improving problem-solving skills across difficulty levels. Active participant from MIT Academy of Engineering with good institute ranking.",
    stats: {
      problemsSolved: 195,
      globalRank: 92,
      badges: 4,
      streak: 9,
      accuracy: "85%"
    },
    achievements: [
      "195 Problems Solved",
      "Institute Rank #92 at MITAOE",
      "Coding Score: 376",
      "Current POTD Streak: 9 days",
      "Multi-language Expert (C++, Java)",
      "105 Easy + 37 Medium + 3 Hard Problems"
    ],
    profileUrl: "https://www.geeksforgeeks.org/user/kasturidl9nt/",
    isActive: true
  }
];

// Platform Card Component
interface PlatformCardProps {
  profile: CodingProfile;
}

const PlatformCard: React.FC<PlatformCardProps> = ({ profile }) => {
  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'leetcode':
        return <Code2 className="w-5 h-5 text-orange-400" />;
      case 'geeksforgeeks':
        return <Target className="w-5 h-5 text-green-400" />;
      default:
        return <Code2 className="w-5 h-5 text-gray-400" />;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'leetcode':
        return 'bg-orange-600';
      case 'geeksforgeeks':
        return 'bg-green-600';
      case 'codechef':
        return 'bg-yellow-600';
      case 'codeforces':
        return 'bg-blue-600';
      case 'hackerrank':
        return 'bg-emerald-600';
      default:
        return 'bg-gray-600';
    }
  };

  const handleCardClick = () => {
    window.open(profile.profileUrl, '_blank');
  };

  return (
    <div 
      className="m-auto bg-[#1F1F1F] p-4 rounded-lg w-62 h-32 flex-shrink-0 cursor-pointer hover:bg-[#2A2A2A] transition-all duration-200 flex flex-col justify-between hover:scale-105 hover:shadow-lg"
      onClick={handleCardClick}
    >
      <div className="flex-1 overflow-hidden">
        <div className="flex items-center gap-2 mb-2">
          {getPlatformIcon(profile.platform)}
          <h3 className="text-white font-semibold text-sm leading-tight">{profile.platform}</h3>
        </div>
        <p className="text-gray-400 text-xs line-clamp-1">@{profile.username}</p>
        {/* <p className="text-gray-500 text-xs mt-1">
          {profile.stats.problemsSolved} problems solved
        </p> */}
      </div>
      <div className="flex items-center justify-between">
        <span className={`text-xs px-2 py-1 rounded text-white ${getPlatformColor(profile.platform)}`}>
          {profile.isActive ? 'Active' : 'Inactive'}
        </span>
        <ExternalLink className="w-4 h-4 text-gray-400" />
      </div>
    </div>
  );
};

// Main Coding Profiles Component
const CodingProfiles: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-full text-left">
      <p className="text-gray-400 text-sm">My Coding Journey</p>
      <h1 className="text-white text-3xl font-bold">DSA & Programming Platforms</h1>
      <p className="text-gray-300 mt-6 leading-relaxed">
        Showcasing my competitive programming journey across various platforms. 
        From algorithmic problem-solving to contest participation, here's my 
        coding profile highlighting consistent practice and continuous improvement in 
        data structures and algorithms. Click on any card to visit the profile directly.
      </p>
      
      <div className="mt-6">
        <div className="flex gap-4 pb-4">
          {codingProfilesData.map((profile) => (
            <PlatformCard 
              key={profile.id}
              profile={profile}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodingProfiles;