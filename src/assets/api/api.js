fetch("/jobs.json")
  .then(r => r.json())
  .then(json => {
      this.jobs = json;
},
response => {
  console.log('Error loading json:', response)
});