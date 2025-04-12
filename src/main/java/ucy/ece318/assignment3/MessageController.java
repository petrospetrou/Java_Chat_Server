package ucy.ece318.assignment3;
import com.theokanning.openai.OpenAiService;
import com.theokanning.openai.completion.CompletionChoice;
import com.theokanning.openai.completion.CompletionRequest;
import com.theokanning.openai.completion.CompletionResult;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.time.format.DateTimeFormatter;
import java.util.Collections;
import java.util.List;
import java.time.LocalDateTime;

@RestController
public class MessageController {

    @Autowired
    private MessageRepository repository;
    private String token = "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";
    OpenAiService service = new OpenAiService(token, 40);
    CompletionRequest request = new CompletionRequest();
    String model ="text-davinci-002";


    @GetMapping("/MessageList")
    public Iterable<Message> getMessages() {return repository.findAll();}

    @GetMapping("/addMessageandResponse")
    public RedirectView addMessageandResponse(@RequestParam final String message) {

        LocalDateTime questionDate = LocalDateTime.now();
        DateTimeFormatter formatType = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String correctDateTime = questionDate.format(formatType);


        Message question = new Message();
        question.setMessageText(message);
        question.setMessageDate(correctDateTime);
        question.setMessageType("Question");
        repository.save(question);
        System.out.println(message);

        Message answer = new Message();
        answer.setMessageType("Answer");

        try {
            request.setStop(Collections.singletonList("."));
            request.setMaxTokens(400);
            request.setModel(model);
            request.setPrompt(String.valueOf(question.getMessageText()));
            CompletionResult response = service.createCompletion(request);

            List<CompletionChoice> responses = response.getChoices();
            for(CompletionChoice c: responses){
                answer.setMessageText(c.getText());
                LocalDateTime answerTime = LocalDateTime.now();
                correctDateTime = answerTime.format(formatType);
                answer.setMessageDate(correctDateTime);
                System.out.println(c.getText());
            }
            repository.save(answer);
        }catch (Exception e){
            e.printStackTrace();
        }

        return new RedirectView("");
    }

    @GetMapping("/deleteMessage")
    public RedirectView deleteMessage(@RequestParam Integer id) {
        repository.deleteById(id);
        return new RedirectView("");
    }

}