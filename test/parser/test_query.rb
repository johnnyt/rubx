require 'helper'

class TestQuery < Minitest::Test
  def setup
    @parser = Rubx::Parser::Query.new
  end

  def test_select
    assert_parses 'select'
  end
end
