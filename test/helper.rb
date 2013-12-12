require 'minitest/pride'
require 'rubx'

module Minitest::Assertions
  def assert_parses(input, opts={})
    begin
      result = @parser.parse(input)
      assert true
    rescue Parslet::ParseFailed => ex
      trace = ex.cause.ascii_tree# if opts && opts[:trace]
      false
    end
  end
end
