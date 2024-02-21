ARG RUBY_VERSION=3.2.2
FROM ruby:${RUBY_VERSION}

ENV APP_ROOT /app
WORKDIR $APP_ROOT

ENV RAILS_ENV="production" \
    BUNDLE_DEPLOYMENT="1" \
    BUNDLE_PATH="/usr/local/bundle" \
    BUNDLE_WITHOUT="development"

# RUN apt-get update && apt-get install -y nodejs

COPY Gemfile ./
COPY Gemfile.lock ./
RUN bundle install

COPY . .
EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]