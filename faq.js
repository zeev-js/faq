function populate(json) {
    let root = document.getElementById('faqAccordion');
    json = [{ question: "How do I?", answer: "like so...",video:"https://www.youtube.com" }, { question: "How do I?", answer: "like so..." }, { question: "How do I?", answer: "like so..." }];
    for (let i = 0; i < json.length; i++) {
        const item = json[i];
        let newdiv = document.createElement('div');
        newdiv.className = "panel panel-default";
        newdiv.innerHTML = `<div class="panel-heading accordion-toggle collapsed question-toggle" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question${i}">
        <h4 class="panel-title">
        <a href="#" class="ing">Q: ${item.question}</a>
        </h4>
        </div>
        <div id="question${i}" class="panel-collapse collapse" style="height: 0px;">
        <div class="panel-body">
        ${item.video?`<h5><a href="${item.video}" class="label label-danger">Watch the tutorial</a></h5>`:`<h5><span class="label label-primary">Answer</span></h5>`}
        <p>${item.answer}</p>
        </div>
        </div>
        </div>`;
        root.appendChild(newdiv);
    }
}
