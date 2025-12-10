# System Design Practice Worksheet

A universal, fill-in-the-blank template for practicing system design problems.  
Use this for any system (Dropbox, Instagram, Uber, Slack, etc.) to build consistency and pattern recognition.

---

## Problem Restatement

**Describe the system in your own words.**

-
-

---

## 1. Clarifying Questions

### 1.1 Functional Requirements

- What are the core user actions?
  -
  -

- Are secondary workflows in scope?
  -

- Are real-time updates required?
  -

### 1.2 Non-Functional Requirements

- Target QPS (read/write)?
  -

- Latency requirements?
  -

- Read/write ratio?
  -

- Durability expectations?
  -

### 1.3 Scope Boundaries

- Authentication included?
  -

- Analytics included?
  -

- Search needed?
  -

- Notifications or sync required?
  -

---

## 2. Goals & Non-Goals

### 2.1 Goals (Prioritized)

-
-
-

### 2.2 Non-Goals

-
-
-

---

## 3. High-Level Architecture

**List or sketch the major components.**

- Client
- API Gateway / Load Balancer
- Application Servers
- Cache
- Primary Database
- Object Storage
- Search Service
- Message Queue / Worker Layer
- CDN

**Architecture description:**

-
-

---

## 4. Data Model

### 4.1 Entities

-
-
-

### 4.2 Access Patterns

-
-

### 4.3 Storage Choice (SQL vs NoSQL vs Blob Storage)

**Choice:**

- **Reasoning:**

-

---

## 5. API & Service Layer

### 5.1 Primary Endpoints

-
-
-

### 5.2 Stateless Services

- How will servers scale horizontally?
  -

---

## 6. Caching Strategy

### 6.1 What to Cache

-

### 6.2 Where to Cache

- Client / CDN / Server / Redis?
  -

### 6.3 Cache Invalidation

-

---

## 7. Asynchronous Components

### 7.1 Tasks for Queues / Workers

-

### 7.2 Idempotency Planning

-

---

## 8. Scalability Plan

### 8.1 Scaling by Component

- **Application Servers:**
  -

- **Database / Sharding:**
  -

- **Cache Cluster:**
  -

- **Queue / Worker Pools:**
  -

### 8.2 Hotspot Management

-

---

## 9. Reliability & Fault Tolerance

### 9.1 Failure Scenarios

-

### 9.2 Replication / Redundancy

-

### 9.3 Backups & Recovery

-

---

## 10. Consistency Model

### 10.1 Strong vs Eventual

-

### 10.2 Read-After-Write Consistency

-

### 10.3 Handling Stale Data

-

---

## 11. Security

### 11.1 Authentication & Authorization

-

### 11.2 Data Encryption

-

### 11.3 Rate Limiting / Abuse Prevention

-

---

## 12. Request Walkthrough

**Step-by-step flow for the main user action.**

1.
2.
3.
4.
5.

---

## 13. Bottlenecks & Future Improvements

### 13.1 First Bottlenecks

-

### 13.2 Long-term Scaling and Enhancements

-

---

## 14. Final Summary (20–30 seconds)

-

---
