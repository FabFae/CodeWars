// https://www.codewars.com/kata/56c22c5ae8b139416c00175d


function match(candidate, job) {
    if (!candidate.minSalary) throw new Error("candidate.minSalary is required")
    if (!job.maxSalary) throw new Error("job.maxSalary is required")
    return candidate.minSalary * 0.9 <= job.maxSalary;
  }
  