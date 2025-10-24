# Paxos 算法

<ArticleMetadata/>

## Paxos 算法简介

Paxos 算法是 Leslie Lamport（莱斯利·兰伯特）在 1990 年提出的一种分布式系统共识算法。这也是第一个被证明完备的共识算法（前提是不存在拜占庭将军问题，也就是没有恶意节点）。

共识算法的作用是让分布式系统中的多个节点之间对某个提案（Proposal）达成一致的看法。提案的含义在分布式系统中十分宽泛，像哪一个节点是 Leader 节点、多个事件发生的顺序等等都可以是一个提案。

兰伯特当时提出的 Paxos 算法主要包含 2 个部分：

* **Basic Paxos 算法**：描述的是多节点之间如何就某个值（提案 Value）达成共识。
* **Multi-Paxos 思想**：描述的是执行多个 Basic Paxos 实例，就一系列值达成共识。

Raft 是 Multi-Paxos 的一个变种，其简化了 Multi-Paxos 的思想，变得更容易被理解以及工程实现。

针对没有恶意节点的情况，除了 Raft 算法之外，当前最常用的一些共识算法比如 ZAB 协议、Fast Paxos 算法都是基于 Paxos 算法改进的。

针对存在恶意节点的情况，一般使用的是工作量证明（POW，Proof-of-Work）、权益证明（PoS，Proof-of-Stake）等共识算法。这类共识算法最典型的应用就是区块链。区块链系统使用的共识算法需要解决的核心问题是拜占庭将军问题。

## Basic Paxos 算法

Basic Paxos 中存在 3 个重要的角色：

* **提议者（Proposer）**：也可以叫做协调者（Coordinator），提议者负责接受客户端的请求并发起提案。提案信息通常包括提案编号（Proposal ID）和提议的值（Value）。
* **接受者（Acceptor）**：也可以叫做投票员（Voter），负责对提议者的提案进行投票，同时需要记住自己的投票历史。
* **学习者（Learner）**：如果有超过半数接受者就某个提议达成了共识，那么学习者就需要接受这个提议，并就该提议作出运算，然后将运算结果返回给客户端。

![](/distribution/2025-04-26_23-14-00.png)

为了减少实现该算法所需的节点数，一个节点可以身兼多个角色。并且，一个提案被选定需要被半数以上的 Acceptor 接受。这样的话，Basic Paxos 算法还具备容错性，在少于一半的节点出现故障时，集群仍能正常工作。

## Multi Paxos 思想

Basic Paxos 算法的仅能就单个值达成共识，为了能够对一系列的值达成共识，我们需要用到 Multi Paxos 思想。Multi-Paxos 只是一种思想，这种思想的核心就是通过多个 Basic Paxos 实例就一系列值达成共识。也就是说，Basic Paxos 是 Multi-Paxos 思想的核心，Multi-Paxos 就是多执行几次 Basic Paxos。

Raft 算法就是 Multi-Paxos 的一个变种，其简化了 Multi-Paxos 的思想，变得更容易被理解以及工程实现，实际项目中可以优先考虑 Raft 算法。
