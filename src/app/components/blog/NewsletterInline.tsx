import { Send } from "lucide-react";

export function NewsletterInline() {
  return (
    <div className="my-16 py-8 px-8 bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl">
      <div className="max-w-xl mx-auto text-center space-y-4">
        <h3 className="text-xl font-serif font-medium text-[#2563eb]">
          Está gostando do texto?
        </h3>
        <p className="text-sm text-[#132A4A]/70 font-light leading-relaxed">
          Assine minha newsletter para receber mais análises sobre economia, cultura e política.
        </p>
        
        <form 
          className="flex gap-2 max-w-md mx-auto pt-2"
          action="https://assets.mailerlite.com/jsonp/2201741/forms/182242667691771631/subscribe"
          data-code=""
          method="post"
          target="_blank"
        >
          <input type="hidden" name="ml-submit" value="1" />
          <input type="hidden" name="anticsrf" value="true" />
          <input 
            type="email" 
            name="fields[email]"
            placeholder="Seu melhor e-mail" 
            className="flex-1 px-4 py-3 bg-white border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#2563EB] transition-colors text-[#132A4A] placeholder:text-[#132A4A]/40 font-light text-sm"
            required
          />
          <button 
            type="submit" 
            className="px-5 py-3 bg-[#2563EB] hover:bg-[#60A5FA] rounded-xl transition-colors flex items-center justify-center"
          >
            <Send className="w-4 h-4 text-white" strokeWidth={1.5} />
          </button>
        </form>
      </div>
    </div>
  );
}