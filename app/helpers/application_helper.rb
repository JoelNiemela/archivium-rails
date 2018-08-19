module ApplicationHelper
	def gravatar_for(user, options = {size: 80})
		gravatar_id = Digest::MD5::hexdigest(user.email.downcase)
		size = options[:size]
		gravatar_url = "https://secure.gravatar.com/avatar/#{gravatar_id}?s=#{size}"
		image_tag(gravatar_url, alt: user.username, style: "border-radius: 50%;")
	end
    
	def alert(type, &block)
		content = capture(&block) + content_tag(:span, content_tag(:p, "×", :class => "alert-content"), :class => "closebtn")
		concat content_tag(:div,  content, :class => ("alert " + type))
	end
end