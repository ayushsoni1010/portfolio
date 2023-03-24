---
title: "API Architectural Styles"
date: "March 23, 2023"
excerpt: "What are the API architectural styles"
cover_image: "/images/api.jpg"
href: "/blogs/api-architectural-style"
tags: "Open Source, API, GraphQL, WebHooks, Web Sockets, REST, API Development, Protocol, JavaScript, gRPC"
---

### **What are the API Architectural Styles?**

The diagram below shows the common API architectural styles at a glance.

&nbsp;
&nbsp;
&nbsp;

![API](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rd23r5sx2n3btuoefx32.png)

&nbsp;

🚀Let's take a closer look at the different architectural styles.

🤔How often do you know what architectural patterns are available?👀

&nbsp;
&nbsp;

### 🚀**REST:**

Proposed in 2000, REST is the most commonly used style. It is often used between frontend clients and backend services. It is compliant with 6 architectural constraints. The common payload formats can be JSON, XML, HTML, or plain text.

&nbsp;

The six architectural constraints are:

- Uniform interface
- Stateless
- Cacheable
- Code on demand
- Layered system
- Client-server

&nbsp;
&nbsp;

### 🚀**GraphQL:**

GraphQL was proposed in 2015 by Meta. It provides a schema-based and type system suitable for complex systems where the relationships between entities are graph-like.

Let's understand it through the diagram. GraphQL can retrieve user and order information in one request, whereas in REST, it requires multiple calls to get the information for user and order.

GraphQL is not a replacement for REST. It can be built upon existing REST services.

&nbsp;
&nbsp;

### 🚀**WebSockets:**

WebSockets are a protocol that provides full-duplex communication over TCP. Clients establish WebSockets to receive real-time updates from the backend services.

Unlike REST, which always pulls data, WebSockets enable pushing.

&nbsp;
&nbsp;

### 🚀**Webhooks:**

Webhooks are usually used for third-party asynchronous API calls.

Let's understand how it works under the hood.

As shown in the diagram, we use Stripe and PayPal for payment channels and register a Webhook for payment results. When a third-party payment service is done, it notifies the payment service if the payment is successful or failed. Webhook calls are usually part of the system's state machine.

&nbsp;
&nbsp;

### 🚀**gRPC:**

Released in 2016, gRPC is used for communications among microservices. The gRPC library handles encoding/decoding and data transmission.

&nbsp;
&nbsp;

### 🚀**SOAP**

SOAP stands for Simple Object Access Protocol. Its payload is XML only, suitable for communications between internal systems.

&nbsp;

🤔Over to you: What API architectural styles have you used?

&nbsp;

---

&nbsp;

Share your feedback, and if you like it, then kindly retweet the first tweet😃

&nbsp;

New to my profile? 🎉

Hey! I am Ayush, a full-stack developer from India. I tweet about my coding journey.

&nbsp;

Follow [@ayushsoni1010](https://twitter.com/ayushsoni1010) for more such content😉