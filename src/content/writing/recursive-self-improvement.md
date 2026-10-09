---
title: Building Intuition for Recursive Self Improvement
date: 2026-10-02
---

Everyone is talking about AI. It’s noisy and political and hyped and uncertain, which makes it difficult to form your own opinion in the sea of information out there.

More recently, everyone is talking about whether it’s going to [kill us all](https://x.com/hilbertspaess/status/2097476196791709843).

One of the buzzwords at the heart of this discussion is **recursive self-improvement (RSI)**. This is the idea that once models become competent at performing research, they’ll be able to use that ability to improve themselves. AI is undoubtedly already significantly assisting human AI researchers, but RSI focuses on the ability for a model to perform research with no human assistance or intervention.

Unlike a human researcher, who needs to be born and educated and eat and sleep, an AI researcher can work around the clock and be cheaply copied to create another equally capable researcher. Taken to the extreme, this creates the possibility of a feedback loop where better models build even better models, leading to exponential growth in model capabilities.

Nobody knows if or when we’ll achieve recursive self-improvement, or how fast takeoff could be if we do. There is a wide range of possible trajectories, including one where progress looks much like it does today or halts entirely due to external shocks. This is an important question in deciding how worried to be about AI, because the speed at which models improve affects both the technological and societal benefits and risks we face and how much time we have to respond to them.

This is one of the biggest questions of our time, so it warrants far more thorough investigation than this post will provide. What I’ll do here is break RSI down into three components:

1. The capabilities models need to contribute meaningfully to AI research.
2. The inputs that allow those capabilities to improve.
3. The feedback loop where better research produces better models, which can then do better research.

I’ll then put these components into a highly simplified model to build some intuition for how the moving parts could interact, and compare the result against the views of people who have studied the topic in much greater depth.

My aim isn’t to make a realistic prediction about whether or when we’ll see RSI, but to provide some scaffolding for building your own intuition around the topic, which can then be updated as we learn more.

## Capabilities Today

We use capability evaluations to understand exactly what these models can do. These are tests designed by humans (or other models) to assess a model’s capabilities. Evaluations are imperfect, can contain errors, and don’t necessarily predict future performance. But they’re still a reasonable way to understand what models can do today.

Here are a few that I think are particularly interesting for assessing model capabilities today:

[GPQA Diamond](https://epoch.ai/benchmarks/gpqa-diamond) tests models on difficult biology, chemistry, and physics questions written by PhD-level experts. Human experts score around 70%, while leading models now score higher. It’s a useful signal that models can perform at an expert level on some scientific reasoning tasks.

<figure>
  <img src="/writing/recursive-self-improvement/gpqa-diamond.webp" width="1920" height="1080" alt="Scatter plot of GPQA Diamond accuracy by model release date, from April 2023 to October 2026. Leading models rise from below the 70% expert human level to above 90%." />
  <figcaption>Accuracy on GPQA Diamond’s PhD-level science questions, by model release date. Leading models now score above the roughly 70% reached by human experts. Source: <a href="https://epoch.ai/benchmarks/gpqa-diamond">Epoch AI</a> (CC BY)</figcaption>
</figure>

[GDPval](https://epoch.ai/benchmarks/gdpval?metric=win_rate&view=graph&tab=release-date) tests models on real-world tasks across a range of jobs, like creating spreadsheets, presentations, and reports. Experts compare the model’s work to answers produced by professionals. The results are from 2025, so they’re already a little dated, but they give a useful sense of how models perform on the kinds of tasks people actually do in their jobs today.

<figure>
  <img src="/writing/recursive-self-improvement/gdpval.webp" width="1920" height="1080" alt="Scatter plot of GDPval win rate by model release date through December 2025, rising from about 12% for GPT-4o to about 50% for GPT-5.2." />
  <figcaption>How often models’ work on GDPval’s real-world job tasks is preferred over professionals’ work, by model release date through December 2025. Source: <a href="https://epoch.ai/benchmarks/gdpval">Epoch AI</a> (CC BY)</figcaption>
</figure>

The [Epoch Capabilities Index](https://epoch.ai/eci) combines several different benchmarks across a range of fields such as mathematics, reasoning and software engineering to form a single score for a model’s capabilities. This can be thought of a little like an IQ score. The number doesn’t mean much in isolation, but it reflects the trend of progress over time.

<figure>
  <img src="/writing/recursive-self-improvement/epoch-capabilities-index.webp" width="1920" height="1080" alt="Scatter plot of Epoch Capabilities Index scores by model release date, rising steadily from about 110 in 2023 to about 166 in late 2026, led by GPT-5.5 Pro and Claude Fable 5." />
  <figcaption>The Epoch Capabilities Index, which combines many benchmarks into a single score, by model release date. Source: <a href="https://epoch.ai/eci">Epoch AI</a> (CC BY)</figcaption>
</figure>

An important thing to note is that capability evaluations typically measure the kinds of problems we’re particularly good at training models to solve. If you can write an evaluation for a task, you can probably also create a learning environment where a model can practice that skill and improve. The same isn’t true for tasks with no clear measure of success, or even a clear definition of the problem. The things that make a task hard or expensive to evaluate are often the same things that make it hard to train a model to do well.

This isn’t quite [Goodhart’s law](https://en.wikipedia.org/wiki/Goodhart%27s_law). Models aren’t worse at basic arithmetic just because we can measure it. But it does mean our picture of model capabilities is incomplete. So take these evaluations as part of the evidence, but also pay attention to how models perform on some of the less defined tasks you ask them to complete.

<aside class="decision">
<p class="decision-label">Question</p>

**Where do you think capabilities are today?**

<p class="decision-label">Current view</p>

I think that we are approaching, but have not reached, artificial general intelligence: a system that can perform at or above a competent human level across most cognitive tasks. The evals above, along with gut feel from using these systems, seem like a reasonable way to gauge progress.

<p class="decision-label">What would change my mind</p>

More impressive eval scores probably wouldn’t move me very much on their own. I’d be much more convinced if I felt that I could replace a competent coworker with a model in conversations about genuinely underspecified problems, where there isn’t much written down about the answer. In my own work, that includes reasoning about denial-of-service issues in private payment networks. I’d update further if coworkers working on similarly open-ended problems, like deciding what functionality to add to a protocol to reduce interactions, were having the same experience.

</aside>

## Research Capabilities

Doing research requires more than being good at science or coding. Models need to be able to decide what questions are worth investigating, make judgement calls when there isn’t a clear answer, and coherently work on ambiguous problems over long periods of time.

[Terminal bench](https://www.terminal-bench-science.ai/) tests models on research workflows across a range of scientific fields. At the time of writing, the best model completes around 60% of the tasks.

<figure>
  <img src="/writing/recursive-self-improvement/terminal-bench.webp" width="2000" height="984" alt="Terminal-Bench-Science Pareto frontier of resolution rate by model release date, May to September 2026, rising from about 10% for Opus 4.8 to about 68% for GPT-6 Astra." />
  <figcaption>The best share of Terminal-Bench Science research workflows that models complete, from May to September 2026. Source: <a href="https://www.terminal-bench-science.ai/">Terminal-Bench Science</a></figcaption>
</figure>

Anthropic has also [provided some evidence](https://www.anthropic.com/institute/recursive-self-improvement) of agents independently designing and running experiments within a research problem, although the overall problem and success criteria were still defined by humans. OpenAI’s recent [self-reported](https://openai.com/index/research-acceleration-view-inside-openai/#the-work-researchers-use-agents-for-is-changing) data tells a similar story. Agent use has grown quickly for building, running, and communicating research, but much less for the harder-to-specify parts of the process, like deciding what to work on or which ideas are worth pursuing.

<figure>
  <img src="/writing/recursive-self-improvement/openai-agent-usage.webp" width="2040" height="1300" alt="Stacked area chart of coding agent output tokens at OpenAI by research stage (decide, design, build, run, analyze, communicate), growing sharply through 2026." />
  <figcaption>Output from coding agents at OpenAI, split by stage of the research process, from deciding what to work on to communicating results. Source: <a href="https://openai.com/index/research-acceleration-view-inside-openai/#the-work-researchers-use-agents-for-is-changing">OpenAI</a></figcaption>
</figure>

Another evaluation that’s relevant to the ability to perform research is [task completion time horizon](https://metr.org/time-horizons/). Research projects run over long time horizons, so agents need to be able to coherently “self manage” to complete them.

<figure>
  <img src="/writing/recursive-self-improvement/metr-time-horizons.webp" width="2700" height="1250" alt="METR chart of the length of software tasks LLMs can complete 80% of the time, growing from seconds for GPT-2 to over three hours for the latest models." />
  <figcaption>The length of software tasks models can complete 80% of the time, measured by how long the tasks take a human. Source: <a href="https://metr.org/time-horizons/">METR</a></figcaption>
</figure>

This evaluation runs into the same issue I mentioned above: it measures well-defined software engineering tasks, so the results may not translate cleanly to long-running, open-ended research.

<aside class="decision">
<p class="decision-label">Question</p>

**Where do you think research capabilities are today?**

<p class="decision-label">Current view</p>

I believe that models are already a significant multiplying factor when paired with a competent human researcher. I’m much less convinced that they can autonomously perform high-quality research without substantial human direction.

<p class="decision-label">What would change my mind</p>

I’d update strongly if labs showed that a much larger share of agent usage was happening in the harder parts of research, particularly deciding what to work on and designing the research approach rather than mainly executing predefined tasks. I’d update even more if those results were independently validated rather than relying only on lab self-reporting.

</aside>

## Capability Drivers and Bottlenecks

The [scaling laws](https://arxiv.org/pdf/2001.08361) paper indicates that large language model performance increases with **model size, data, and computing power.** Practically, this means that we are constrained by the volume and quality of data we’re able to train on and the computing resources to run training because we’re able to design larger models if we have the resources to train them. These laws are trends extrapolated from models that we have already trained, and there is no guarantee that they will continue indefinitely.

### Can we scale compute?

Our ability to scale the computing power we have available is important to RSI in two key ways:

- **Training models**: More compute lets us train larger models, on more data, for longer, which has historically [been a significant driver of performance](https://epoch.ai/publications/algorithmic-progress-in-language-models).
- **Performing research**: More compute also lets AI researchers run more experiments, simulations, and parallel attempts when trying to improve future models.

The second part may be more important than it first appears. The data is limited, but [estimates suggest](https://epoch.ai/gradient-updates/r-and-d-vs-training-compute) that final training runs account for only around 10–20% of compute spending, with most of the rest going toward research, development, experiments, and data generation. If AI researchers get much faster, they may want to run many more experiments, which means research itself could quickly become constrained by available compute.

Compute is also likely to keep growing quickly over the next few years. [AI 2027 estimates](https://ai-2027.com/research/compute-forecast) that global AI compute could grow around 2.25× per year through 2027, and closer to 3.4× per year for leading labs. [Epoch expects](https://epoch.ai/publications/can-ai-scaling-continue-through-2030) substantial scaling to remain possible through 2030, with electricity and chip production becoming more serious constraints as we get closer to that point.

AI could partly improve compute constraints by improving chip design, hardware efficiency and the operation of electricity systems. There are already [examples](https://deepmind.google/blog/how-alphachip-transformed-computer-chip-design) of this [happening](https://deepmind.google/blog/alphaevolve-impact), but it is much less clear how much AI can speed up the physical manufacturing and infrastructure buildout needed to add new compute.

<aside class="decision">
<p class="decision-label">Question</p>

**Will compute be a bottleneck over the next decade?**

<p class="decision-label">Current view</p>

This is the part of the picture where I have the weakest intuition, so I’m mostly relying on existing estimates. I’ll use Epoch’s estimate of around 3.4× annual compute growth for frontier labs as a reasonable baseline over the next few years. I expect AI-driven efficiency gains to matter eventually, but probably not dramatically until we have much more capable AI researchers.

<p class="decision-label">What would change my mind</p>

I’d update quickly if there were major restrictions on data-center buildout in the US. In the other direction, I’d update if labs were consistently able to bring new power and data-center capacity online much faster than current estimates assume.

</aside>

### Can we scale data?

There are a few different phases involved in training a model, each contributing to what the model can do [in different ways](https://arxiv.org/abs/2512.07783):

- **Pretraining**: Train the model on massive amounts of text, usually the most of the internet. This gets the model to the stage where they are an incredibly smart autocorrect that can predict the next word in a sentence.This stage is where the model builds most of its knowledge and capabilities.
- **Mid-training**: Continue training the model on more curated data, like scientific textbooks, code, or worked math problems, to improve its capabilities in particular areas. This uses a similar process to pretraining and helps to build specific knowledge and skills.
- **Supervised fine-tuning**: Train the model on examples of the kinds of responses we want, like conversations between a user and an assistant. This teaches the model how to use its existing knowledge and skills in a particular setting.
- **Reinforcement learning**: Let the model try a task many times, then tell it which attempts were better or worse. Over time, it learns which approaches are more likely to lead to a good outcome. This can make existing capabilities more reliable, or teach the model to use what it already knows in new ways.

The scaling laws referenced above mostly apply to pretraining, and likely carry over to mid-training because it uses a similar process. We don’t yet have the same clear, general rules for how the other processes scale into better capabilities.

It’s [estimated](https://epoch.ai/publications/will-we-run-out-of-data-limits-of-llm-scaling-based-on-human-generated-data) that we could run out of high-quality human-generated text for pretraining by around 2030. We could use existing models to generate “synthetic data”, but this only helps if it gives the model something new to learn. This is more straightforward in defined areas like mathematics, where models can generate new problems and check their answers, and much less certain in messier domains where there is no clear way to tell whether the generated data is actually good.

The data we can capture also needs to contain the things models need to become good researchers. Papers and textbooks contain a huge amount of scientific knowledge, but research also relies on things that are harder to write down: choosing which questions are worth pursuing, noticing when a result looks strange, or knowing when to abandon an approach. We mostly record the outputs of successful research, not all of the judgement that produced them.

Models may still be able to learn some of this indirectly. They can combine ideas and generalize from what they’ve learned elsewhere, so they don’t necessarily need to see every skill demonstrated directly in their training data. The uncertainty is how far this goes.

We could also try to teach these harder-to-capture parts of research through reinforcement learning. Models can be put in environments where they propose ideas, run experiments, and learn from the results. The difficulty is that this works best when we can define what success looks like, and good research is often hard to score.

<aside class="decision">
<p class="decision-label">Question</p>

**Can we continue to provide useful training signal?**

<p class="decision-label">Current view</p>

I think we probably can, but that it will get increasingly difficult. Reinforcement learning seems more promising than synthetic data for improving research capabilities, but creating and verifying good environments for open-ended research still seems expensive and human-intensive.

<p class="decision-label">What would change my mind</p>

I’d change my view significantly if we were able to create high-quality RL environments for difficult-to-measure problems, and actually did the expensive work of properly verifying that new capabilities emerged from them. I’d update quite strongly if research showed that we could continue getting substantial gains from the data we already have through better reuse or training optimizations.

</aside>

### A note on Algorithms

(A warning for ML researchers: what follows is intentionally simplified)

Improvements to the efficiency of algorithms we use to train models can [decrease the amount of compute](https://epoch.ai/gradient-updates/the-least-understood-driver-of-ai-progress) needed to reach the same level of performance, which means we can train more capable models on the same hardware. It’s [difficult to decouple](https://epoch.ai/publications/algorithmic-progress-in-language-models) these gains from improvements in data and increased scale because all of these tend to change together. Available [estimates](https://epoch.ai/gradient-updates/the-least-understood-driver-of-ai-progress#appendix-estimates-of-software-progress) have a very large margin for error, but suggest that improvements to AI software may be equivalent to several-fold more effective compute each year.

Right now, frontier models are built using [transformers](https://youtu.be/wjZofJX0v4M?si=eObFrVGKDDeeRize). They were a [significant step forward in performance](https://epoch.ai/publications/algorithmic-progress-in-language-models), and were developed by trying different ideas and seeing what worked, guided by theory and intuition. There’s no reason to assume that transformers are the best architecture we could ever find; they’re just the best option we know of.

AI-driven research could run experiments, measure results and improve algorithms in the same way people have. Models are likely a long way from independently discovering a completely new architecture, but larger improvements seem plausible if they’re given enough time and compute to experiment.

<aside class="decision">
<p class="decision-label">Question</p>

**How should we reason about algorithmic and software progress?**

<p class="decision-label">Current view</p>

Improvements across the software and training stack have historically been [estimated](https://epoch.ai/publications/algorithmic-progress-in-language-models) to produce gains equivalent to around 2–3× more compute per year. That seems like a reasonable rough baseline given how uncertain the numbers are. There’s also the possibility that we find a completely new paradigm beyond transformers, but I currently think that’s relatively unlikely.

<p class="decision-label">What would change my mind</p>

I’d change my view if new research did a better job of separating algorithmic improvements from gains due to increased compute, particularly if frontier labs acknowledged that the methods were genuinely new and useful to them. I’d also update if serious work on a different model paradigm started producing promising early results, making a larger architectural breakthrough seem more plausible.

</aside>

## The Feedback Loop

What makes RSI different from ordinary research is the potential for a feedback loop. A human researcher who makes a breakthrough moves their field forward, but they're still the same researcher afterwards. An AI that makes a breakthrough can produce a better model, and that better model may be able to make the next breakthrough faster.

If each model speeds up the next, then you get a takeoff. If something slows this down, then you get something closer to today’s progress. Parts of this loop can be measured, but the whole thing can't yet. So this section leans more on educated guesses from researchers, and on what the labs say about themselves, than the rest of the post.

### Research Boost

The loop only gets going if better models actually help with the work of building their successors. Each new model can make the people and agents working on the next one more productive.

The labs report that this boost is already large, although all note that these measurements are difficult to isolate. Anthropic says [more than 80% of its merged code](https://www.anthropic.com/institute/recursive-self-improvement) is now written by Claude, and its researchers report about 4× more output, up from [+50% a year earlier](https://www.anthropic.com/research/how-ai-is-transforming-work-at-anthropic). OpenAI reports [3.1 agent-workdays for every human workday](https://openai.com/index/research-acceleration-view-inside-openai/).

More code and more experiments aren’t the same as faster progress, but even a modest boost compounds if every new model makes the next round of research a little faster.

### Research Autonomy

How much of the research AI can take on without people matters as much as how fast it works. [Amdahl’s law](https://en.wikipedia.org/wiki/Amdahl%27s_law) says a process can only go as fast as its slowest part. If AI does 95% of the research but humans still do the other 5%, research can only go about 20× faster, however good the AI gets.

In OpenAI’s [breakdown](https://openai.com/index/research-acceleration-view-inside-openai/#the-work-researchers-use-agents-for-is-changing), agents mostly build and run experiments, while humans still choose priorities and decide whether to scale or ship. METR’s [timelines model](https://metr.org/notes/2026-02-10-simpler-ai-timelines-model/) puts automation at 25–50% of AI research tasks in early 2026, with a median of more than 99% by late 2032. The last few percent matter a lot: going from 90% to 99% moves the ceiling from 10× to 100×.

I think that this will come down to research taste and judgement. If AI can make good decisions about what to research, the loop can run much faster. If humans are still needed for those decisions, it stays tied to human speed.

### Deployment Lag

A good idea doesn’t help the loop until it ends up in a model that can use it for the next round of research, and every turn of the loop waits on that journey.

[OpenAI](https://openai.com/index/research-acceleration-view-inside-openai/) describes this development cycle as including experiment design, evaluation, infrastructure work and debugging before changes make it into training. [Epoch](https://epoch.ai/epoch-after-hours/ai-in-2030) estimates frontier training runs already take on the order of several months. RSI could compress much of the work around the training run by automating experiments, coding, evaluation and debugging, but some latency remains because experiments and training still have to physically run.

Deployment lag therefore acts less like a ceiling on takeoff than a brake on its timing. It doesn’t necessarily change how far capabilities eventually rise; it spreads those gains over more calendar time, turning what might otherwise look like a near-vertical jump into a sequence of fast steps over time.

### Hardware Speedup

AI could also accelerate the loop by improving the hardware that makes training and research possible. That could mean designing better chips, getting more useful compute out of existing hardware, or making data centers more efficient to build and run so that the compute bottleneck is eased.

AI is [already](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/) being used to improve chip design, but turning those gains into substantially more compute still requires physical infrastructure. [Epoch](https://epoch.ai/gradient-updates/compute-scaling-will-slow-down-due-to-increasing-lead-times) estimates roughly 1–2 years to build a data center, 2–3 years for very large facilities or power plants, and 4–5 years for a new cutting-edge chip fab.

RSI could shorten design and planning, and sufficiently capable robotics could eventually speed up construction and manufacturing too, but for now hardware looks like a much slower feedback loop than software.

### Difficulty of Innovation

Not everything pushes the loop faster. As the obvious ideas get used up, each improvement may take more research than the last.

We don’t have good evidence for how quickly this effect sets in for AI research. Moore’s law is probably the closest analogue we have: sustaining progress in chip performance has required far [more researchers over time](https://pubs.aeaweb.org/doi/10.1257/aer.20180338). But AI research may behave very differently, so this is at best a rough comparison rather than something we should assume carries over.

This is one of the [main things](https://www.forethought.org/research/will-ai-r-and-d-automation-cause-a-software-intelligence-explosion) that determines whether RSI runs away or simply makes progress much faster. If better AI researchers increase research productivity faster than new ideas become harder to find, the [loop accelerates](https://www.nber.org/papers/w35155); if not, automation can still compress years of progress without producing an explosion.

<aside class="decision">
<p class="decision-label">Question</p>

**Which effect do you think will dominate the feedback loop?**

<p class="decision-label">Current view</p>

I think incomplete autonomy and diminishing returns will dominate. Humans still seem important for judging research quality and deciding what to pursue. I have a weakly held impression, based mostly on anecdotal evidence, that the gains we’re seeing so far are coming more from low-hanging fruit than from genuinely new innovation.

<p class="decision-label">What would change my mind</p>

I’d shift toward a much faster loop if AI drove dramatic improvements in hardware or robotics, or if we moved past the obvious low-hanging fruit and experts still reported genuinely important innovations arriving quickly.

</aside>

## Back of Envelope

To build some intuition for how these pieces interact, I’ll bring them together in a **highly simplified** model. This is **not intended as a prediction**, but as a way to understand the relationships between the moving parts and update your intuition as new information comes in.

To interact with the model, you can choose a reasonable starting state based on where you think we are today, and set your beliefs about the capabilities and bottlenecks we’ll see in the future.

<figure class="rsi-model">
  <iframe data-autosize data-share-params allow="clipboard-write" src="/writing/recursive-self-improvement/rsi-model.html" title="Interactive back-of-envelope model of recursive self-improvement" loading="lazy" style="display:block;width:100%;height:2000px;border:0;"></iframe>
</figure>

<script is:inline>
  // Shared links: pass settings in the post's URL on to the model
  if (location.search) {
    const model = document.querySelector("iframe[data-share-params]");
    if (model) model.src = model.getAttribute("src") + location.search;
  }

  // Size embedded interactives to their content
  window.addEventListener("message", (e) => {
    if (e.origin !== location.origin || !e.data || e.data.type !== "embed-height") return;
    document.querySelectorAll("iframe[data-autosize]").forEach((f) => {
      if (f.contentWindow === e.source) f.style.height = e.data.height + "px";
    });
  });
</script>

<p class="share-prompt">Want to share or keep this? <button type="button" class="share-link" id="share-intuition">Share your intuition</button><span class="share-toast" id="share-toast" role="status" aria-live="polite"></span></p>

<script is:inline>
  // "Share your intuition": copy a link that reopens the model with the reader's settings
  (() => {
    let query = location.search.slice(1);
    window.addEventListener("message", (e) => {
      if (e.origin === location.origin && e.data && e.data.type === "model-settings") query = e.data.query;
    });
    const button = document.getElementById("share-intuition");
    const toast = document.getElementById("share-toast");
    let timer = null;
    const say = (text) => {
      toast.textContent = text;
      toast.classList.add("show");
      clearTimeout(timer);
      timer = setTimeout(() => toast.classList.remove("show"), 2500);
    };
    button.addEventListener("click", () => {
      const url = location.origin + location.pathname + (query ? "?" + query : "") + "#back-of-envelope";
      const copied = () => say("Link copied");
      const failed = () => { history.replaceState(null, "", url); say("Copy the link from your address bar"); };
      try { navigator.clipboard.writeText(url).then(copied, failed); } catch (err) { failed(); }
    });
  })();
</script>

## Expert Projections

It’s difficult to form your own opinion here. The types of problems you use AI for will bias your view of how it’s progressing, and investigating the many moving parts in RSI requires more time than most people have. Expert opinions can therefore be useful as another input, helping to anchor your intuition against people who have spent much more time studying the question.

These opinions aren’t ground truth either. People have different models of how progress works, different access to frontier systems, and their own incentives and biases. I think the useful approach is to look across a range of informed views, understand why they differ, and combine them with your own reasoning rather than relying on any single forecast.

The chart below gives a sample of those views, ranging from relatively skeptical to much faster takeoff scenarios.

<figure class="expert-timelines">
  <iframe data-autosize src="/writing/recursive-self-improvement/expert-timelines.html" title="Expert views on when AI research may be automated, and whether it leads to a takeoff" loading="lazy" style="display:block;width:100%;height:640px;border:0;"></iframe>
  <figcaption>Sources are estimating different milestones and should not be read as directly comparable predictions. Dates and ranges are shown to give a sense of the spread of current views. Hover over or tap a row for details.</figcaption>
</figure>

## Conclusion

Predictions on AI timelines tend to [age like milk](https://xkcd.com/386/), so I expect to update these views as my understanding grows and new information comes in. [My current intuition](https://carlakc.me/writing/recursive-self-improvement/?cap=95&hardware=medium&data=low#back-of-envelope) is that AI will become extremely useful for performing and speeding up research, but that data, compute and the messy realities of doing good research will create bottlenecks along the way. I’m not expecting an exponential takeoff. But I am expecting progress to be very, very fast.

Which means there is work to be done. Throughout this post, the evidence that matters most has been the hardest to get: evaluations measure what's easy to measure, the best numbers on research uplift come from the labs' own reports, and nobody has measured the feedback loop as a whole. We need better ways to measure the messy, open-ended capabilities that research depends on, and we need labs to publish evidence about their progress that others can check. Most of all, the loop gets faster precisely as humans step out of it, which is also when it's hardest to notice if models are taking shortcuts rather than doing what we actually want.

<p class="thanks"><em>Many thanks to <a href="https://www.reinthal.me/about/">Alexander Reinthal</a> for helping me out with helpful resources, questions and review. Also thanks to <a href="https://www.ellemouton.com/">Elle Mouton</a> and <a href="https://www.linkedin.com/in/leila-stein-074a0670/">Leila Stein</a> for their input.</em></p>
