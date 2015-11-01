use Rack::Static,
  :urls => ["/Assets"],
  :root => "RobowizWebsite"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'RobowizWebsite, max-age=86400'
    },
    File.open('index.html', File::RDONLY)
  ]
}