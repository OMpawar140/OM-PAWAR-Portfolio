// src/components/Pages/CodingProfiles.tsx

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
        return <Code2 className="w-4 h-4 text-orange-400 flex-shrink-0" />;
      case 'geeksforgeeks':
        return <Target className="w-4 h-4 text-green-400 flex-shrink-0" />;
      default:
        return <Code2 className="w-4 h-4 text-gray-400 flex-shrink-0" />;
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
      className="bg-[#1F1F1F] p-3 rounded-lg cursor-pointer hover:bg-[#2A2A2A] transition-all duration-200 hover:scale-[1.02] hover:shadow-lg min-h-[100px] w-full"
      onClick={handleCardClick}
    >
      <div className="flex flex-col h-full justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            {getPlatformIcon(profile.platform)}
            <h3 className="text-white font-semibold text-sm leading-tight flex-1">{profile.platform}</h3>
          </div>
          <p className="text-gray-400 text-xs truncate">@{profile.username}</p>
        </div>
        <div className="flex items-center justify-between mt-2 pt-2">
          <span className={`text-xs px-2 py-1 rounded text-white ${getPlatformColor(profile.platform)}`}>
            {profile.isActive ? 'Active' : 'Inactive'}
          </span>
          <ExternalLink className="w-3 h-3 text-gray-400 flex-shrink-0" />
        </div>
      </div>
    </div>
  );
};

// Main Coding Profiles Component
const CodingProfiles: React.FC = () => {
  return (
    <div className="h-full w-full overflow-hidden">
      <div className="flex flex-col h-full p-2 sm:p-4">
        <div className="flex-shrink-0">
          <p className="text-gray-400 text-xs sm:text-sm">My Coding Journey</p>
          <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-1">DSA & Programming Platforms</h1>
        </div>
        
        <div className="flex-shrink-0 mt-2 sm:mt-3">
          <p className="text-gray-300 leading-relaxed text-xs sm:text-sm line-clamp-3">
            Showcasing my competitive programming journey across various platforms. 
            From algorithmic problem-solving to contest participation, here's my 
            coding profile highlighting consistent practice and continuous improvement.
          </p>
        </div>
        
        <div className="flex-1 mt-3 sm:mt-4 min-h-0">
          <div className="h-full overflow-y-auto overflow-x-hidden">
            <div className="flex flex-col gap-3 sm:gap-4 pb-4">
              {codingProfilesData.map((profile) => (
                <div key={profile.id} className="flex-shrink-0">
                  <PlatformCard profile={profile} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingProfiles;