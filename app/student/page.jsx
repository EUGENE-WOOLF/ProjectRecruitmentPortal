"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  BookOpen,
  Clock,
  FileText,
  MessagesSquare,
  ScrollText,
} from "lucide-react";
import { mockProjects } from "@/app/mock/projects";
import { mockUsers } from "@/app/mock/users";
import { mockRequests } from "@/app/mock/requests";

export default function StudentDashboard() {
  // In a real app, this would come from your auth state
  const currentUser = mockUsers.find((u) => u.id === "u1");
  const userRequests = mockRequests.filter((r) => r.studentId === "u1");
  const recentProjects = mockProjects.slice(0, 3);

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold">
            Welcome back, {currentUser?.name}
          </h1>
          <p className="text-gray-400 mt-1">
            Here's what's happening with your projects
          </p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="bg-blue-500/10 text-blue-400">
            Year {currentUser?.year}
          </Badge>
          <Badge variant="outline" className="bg-purple-500/10 text-purple-400">
            {currentUser?.department}
          </Badge>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-[#1C1E2D] border-white/5">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <ScrollText className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Active Requests</p>
                <h3 className="text-2xl font-semibold">
                  {userRequests.filter((r) => r.status === "pending").length}
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1C1E2D] border-white/5">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Active Projects</p>
                <h3 className="text-2xl font-semibold">
                  {userRequests.filter((r) => r.status === "approved").length}
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1C1E2D] border-white/5">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <FileText className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Submissions</p>
                <h3 className="text-2xl font-semibold">12</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1C1E2D] border-white/5">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <MessagesSquare className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Messages</p>
                <h3 className="text-2xl font-semibold">3</h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Projects */}
      <Card className="bg-[#1C1E2D] border-white/5">
        <CardHeader>
          <CardTitle>Recent Projects</CardTitle>
          <CardDescription>
            Latest available projects that match your skills
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {recentProjects.map((project) => {
              const professor = mockUsers.find(
                (u) => u.id === project.professorId
              );
              return (
                <div
                  key={project.id}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-semibold truncate">
                      {project.title}
                    </h4>
                    <p className="text-sm text-gray-400 mt-1 truncate">
                      by {professor?.name}
                    </p>
                    <div className="flex gap-2 mt-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="bg-white/5"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>
                      {new Date(project.deadline).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Profile Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-[#1C1E2D] border-white/5">
          <CardHeader>
            <CardTitle>Your Profile</CardTitle>
            <CardDescription>
              Your skills and academic information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-400">Department</p>
                  <p className="text-sm font-medium mt-1">
                    {currentUser?.department}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Year</p>
                  <p className="text-sm font-medium mt-1">
                    {currentUser?.year}rd Year
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400">Skills</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {currentUser?.skills?.map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-white/5">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400">Bio</p>
                <p className="text-sm mt-1">{currentUser?.bio}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1C1E2D] border-white/5">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {userRequests.slice(0, 3).map((request) => {
                const project = mockProjects.find(
                  (p) => p.id === request.projectId
                );
                return (
                  <div key={request.id} className="flex items-center gap-4">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        request.status === "approved"
                          ? "bg-green-500"
                          : request.status === "rejected"
                          ? "bg-red-500"
                          : "bg-yellow-500"
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {project?.title}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {new Date(request.submittedAt).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        request.status === "approved"
                          ? "bg-green-500/10 text-green-400"
                          : request.status === "rejected"
                          ? "bg-red-500/10 text-red-400"
                          : "bg-yellow-500/10 text-yellow-400"
                      }
                    >
                      {request.status}
                    </Badge>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
