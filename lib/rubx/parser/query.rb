class Rubx::Parser::Query < Parslet::Parser
  include Rubx::Parser::Common

  root(:query)

  rule(:query) do
    select
  end

  rule(:select) { str('select') }
  #rule(:content) { Rubx::Parser::Inline.new }
  #rule(:block_html) { Rubx::Parser::BlockHtmlElement.new }
  #rule(:block_html_tag) { Rubx::Parser::BlockHtmlTag.new >> (str("\n").repeat(1) | eof) }

  #rule(:attributes?) { Rubx::Parser::Attributes.new.attribute.repeat }

  rule(:eof) { str("\n").repeat >> any.absent? }
  rule(:spaces) { match("[\t ]").repeat }
end
