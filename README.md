# AI-Powered Ticket Management Assistant

## Overview
AI-Powered Ticket Management Assistant is a project built for an AI product design course. The application helps IT Help Desk managers reduce ticket delays by using AI to identify tickets at risk of missing SLA deadlines, recommend the best technician for each ticket, and surface workflow bottlenecks before they affect employees or customers. The goal is to improve response times, reduce reassignments, and increase operational efficiency across support teams.

## The Problem
Delayed or repeatedly reassigned IT tickets reduce productivity and create frustration for both employees and customers. Common issues include:
- Missed SLA commitments that erode trust and increase risk.
- Repeated reassignment that wastes time and leaves problems unresolved.
- Hidden workflow bottlenecks that slow resolution and obscure accountability.
These problems increase operational cost, lower employee satisfaction, and create downstream business impacts when critical incidents are not resolved quickly.

## Our Solution
This assistant applies AI-driven analysis to historical ticket and change data to provide actionable insights:
- Predict which open tickets are at risk of missing SLA deadlines so teams can prioritize proactively.
- Recommend the most appropriate technician for a ticket based on skills, workload, past resolution performance, and ticket context.
- Detect and highlight process bottlenecks (queues, teams, or steps) that frequently delay resolution so managers can remediate before they cascade into larger incidents.
- Present recommendations and alerts through a real-time dashboard so managers have visibility and can act quickly.

## Key Features
- AI ticket routing recommendations: Suggest the best technician to handle each ticket based on historical outcomes and current load.
- SLA risk prediction: Score tickets by likelihood of missing SLAs to prioritize follow-up.
- Bottleneck detection: Identify recurring process, queue, or team-level bottlenecks before they impact service.
- Technician workload balancing: Surface overload and reassign suggestions to level work across the team.
- Real-time dashboard: Interactive view for managers showing at-risk tickets, assignment recommendations, and performance trends.

## Technologies Used
- Python
- SQL
- Tableau Public
- GitHub
- Git
- AI-assisted analysis

## Dataset
The project uses historical IT operations datasets, including ticket records, assignment and reassignment history, timestamps, technician metadata, and change history. These datasets allow the system to learn patterns of delays, common reassignment causes, and performance signals that correlate with successful and timely ticket resolutions. (Any sensitive data used in prototyping was anonymized or synthetic in accordance with applicable policies.)

## Business Impact
Reducing ticket delays produces measurable benefits:
- Improved employee productivity by getting issues resolved faster.
- Higher customer and employee satisfaction due to more reliable, timely support.
- Reduced operational cost through fewer escalations and less wasted rework from repeated reassignments.
- Better SLA compliance and lower risk from delayed incident resolution.

## Future Improvements
Planned enhancements to increase impact and ease adoption:
- Machine learning routing model: Train and deploy an adaptive model that learns from ongoing outcomes.
- ServiceNow integration: Bi-directional sync for enterprise ITSM platforms.
- Jira integration: Support engineering and product workflows for cross-functional teams.
- Predictive analytics: More advanced forecasting for workload and incident surges.
- Natural language ticket summarization: Auto-generate concise summaries to speed triage.

## Team
- Jason Gibbs
- Nathan Hutton

## License
This project is released under the MIT License.
